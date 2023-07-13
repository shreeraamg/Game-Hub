import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GameCardSkleton = () => {
  return (
    <Card width="300px" borderRadius={5}>
      <Skeleton height="240px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkleton;
