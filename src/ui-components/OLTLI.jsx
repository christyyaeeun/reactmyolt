/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function OLTLI(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="375px"
      height="794px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "OLTLI")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        overflow="hidden"
        boxShadow="0px 25px 43px rgba(0, 0, 0, 0.11999999731779099)"
        borderRadius="30px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(199,203,214,1)"
        opacity="0.800000011920929"
        {...getOverrideProps(overrides, "OLTSignIn")}
      >
        <Text
          fontFamily="Open Sans"
          fontSize="35px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="35px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="169px"
          height="80px"
          position="absolute"
          top="112px"
          left="31px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Our Lives Together"
          {...getOverrideProps(overrides, "Our Lives Together")}
        ></Text>
        <Icon
          width="411px"
          height="403px"
          viewBox={{ minX: 0, minY: 0, width: 411, height: 403 }}
          paths={[
            {
              d: "M0 12C0 5.37259 5.37258 0 12 0L399 0C405.627 0 411 5.37258 411 12L411 391C411 397.627 405.627 403 399 403L12 403C5.37259 403 0 397.627 0 391L0 12Z",
              fill: "rgba(249,248,246,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="398px"
          left="-17px"
          {...getOverrideProps(overrides, "Rectangle 79")}
        ></Icon>
        <Image
          width="162.27px"
          height="292.41px"
          position="absolute"
          top="172.53px"
          left="176px"
          transformOrigin="top left"
          transform="rotate(-60deg)"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "image 2")}
        ></Image>
      </View>
    </View>
  );
}
