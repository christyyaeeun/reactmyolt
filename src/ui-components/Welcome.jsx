/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function Welcome(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="480px"
      height="1003px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Welcome")}
    >
      <View
        width="1003px"
        height="480px"
        position="absolute"
        top="0px"
        left="calc(50% - 501.5px - -741.5px)"
        overflow="hidden"
        transformOrigin="top left"
        transform="rotate(90deg)"
        borderRadius="40px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(181,210,220,1)"
        {...getOverrideProps(overrides, "Landing")}
      >
        <Icon
          width="625.920166015625px"
          height="553.37939453125px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 625.920166015625,
            height: 553.37939453125,
          }}
          paths={[
            {
              d: "M625.92 276.69C625.92 429.501 485.803 553.379 312.96 553.379C140.117 553.379 0 429.501 0 276.69C0 123.878 140.117 0 312.96 0C485.803 0 625.92 123.878 625.92 276.69Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="114.93%"
          bottom="-130.22%"
          left="59.11%"
          right="-21.52%"
          transformOrigin="top left"
          transform="rotate(-90deg)"
          {...getOverrideProps(overrides, "BG Circle")}
        ></Icon>
        <Text
          fontFamily="Alegreya Sans"
          fontSize="16px"
          fontWeight="400"
          color="rgba(255,255,255,0.5)"
          lineHeight="18.75px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="279px"
          height="29px"
          position="absolute"
          top="380px"
          left="326px"
          transformOrigin="top left"
          transform="rotate(-90deg)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="continue without creating an account"
          {...getOverrideProps(overrides, "How are you feeling today ?")}
        ></Text>
        <Text
          fontFamily="Alegreya"
          fontSize="30px"
          fontWeight="500"
          color="rgba(255,255,255,1)"
          lineHeight="35.15625px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="304px"
          left="274px"
          transformOrigin="top left"
          transform="rotate(-90deg)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Welcome !"
          {...getOverrideProps(overrides, "Welcome back, Sarina!")}
        ></Text>
      </View>
    </View>
  );
}
