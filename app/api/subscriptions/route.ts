import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { absoluteUrl } from '@/lib/utils';
import { authOptions } from '@/lib/auth';
import { SubscriptionService } from '@/services';
import { getServerSession } from 'next-auth';

export async function GET() {
  try {
    const settingsUrl = absoluteUrl('/settings');
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const { user } = session;
    const userId = user.id;

    const userSubscription = await SubscriptionService.findOne({
      userId,
    });

    if (userSubscription && userSubscription.stripeCustomerId) {
      const stripeSession = await stripe.billingPortal.sessions.create({
        customer: userSubscription.stripeCustomerId,
        return_url: settingsUrl,
      });

      return new NextResponse(JSON.stringify({ url: stripeSession.url }));
    }

    const stripeSession = await stripe.checkout.sessions.create({
      success_url: settingsUrl,
      cancel_url: settingsUrl,
      payment_method_types: ['card'],
      mode: 'subscription',
      billing_address_collection: 'auto',
      customer_email: user.email!,
      line_items: [
        {
          price_data: {
            currency: 'USD',
            product_data: {
              name: 'MobMox Pro',
              description: 'Unlimited Access to Mobile Mockups & Designs',
            },
            unit_amount: 2000,
            recurring: {
              interval: 'month',
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        userId,
      },
    });

    return new NextResponse(JSON.stringify({ url: stripeSession.url }));
  } catch (error) {
    console.log('[STRIPE_ERROR]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
