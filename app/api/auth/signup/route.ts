import withErrorHandler from '@/middlewares/with-error-handler';
import { AuthService } from '@/services';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
  const { email, password } = await req.json();

  const user = await AuthService.signup({ email, password });

  return NextResponse.json({
    status: true,
    message: 'Signup successful',
    data: user,
  });
};

// export default withErrorHandler(handler, '[SIGNUP] => ');
