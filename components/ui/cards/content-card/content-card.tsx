import React from 'react';
import { Card, CardContent } from '../../card';

type Props = {};

const ContentCard = (props: Props) => {
  return (
    <Card>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
    </Card>
  );
};

export default ContentCard;
