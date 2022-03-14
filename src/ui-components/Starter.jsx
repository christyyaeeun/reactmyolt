/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function Starter(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="375px"
      height="812px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Starter")}
    >
      <View
        padding="0px 0px 0px 0px"
        width="309px"
        height="309px"
        position="absolute"
        top="354px"
        left="33px"
        {...getOverrideProps(overrides, "onboarding-image")}
      >
        <Icon
          width="309px"
          height="309px"
          viewBox={{ minX: 0, minY: 0, width: 309, height: 309 }}
          paths={[
            {
              d: "M309 154.5C309 239.828 239.828 309 154.5 309C69.172 309 0 239.828 0 154.5C0 69.172 69.172 0 154.5 0C239.828 0 309 69.172 309 154.5Z",
              fill: "rgba(255,232,232,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="0px"
          left="0px"
          {...getOverrideProps(overrides, "Ellipse 49")}
        ></Icon>
      </View>
      <Flex
        gap="12px"
        position="absolute"
        top="122px"
        left="0px"
        direction="column"
        height="169px"
        alignItems="center"
        overflow="hidden"
        padding="32px 24px 32px 24px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "text blocks /  text - 2 - Center")}
      >
        <Flex
          gap="24px"
          direction="column"
          alignItems="center"
          shrink="0"
          width="327px"
          overflow="hidden"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 1815")}
        >
          <Text
            fontFamily="PT Serif"
            fontSize="36px"
            fontWeight="400"
            color="rgba(24,25,31,1)"
            lineHeight="40px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="327px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Our Lives Together"
            {...getOverrideProps(overrides, "Work with best designers")}
          ></Text>
          <Text
            fontFamily="Montserrat"
            fontSize="18px"
            fontWeight="500"
            color="rgba(71,74,87,1)"
            lineHeight="28px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="327px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Find simple ways to connect and keep track with the ones you love."
            {...getOverrideProps(
              overrides,
              "Wireframe is still important for ideation. It will help you to quickly test idea."
            )}
          ></Text>
        </Flex>
      </Flex>
      <View
        width="375px"
        height="118px"
        position="absolute"
        top="0px"
        left="0px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Screen title / Home Title - Center")}
      >
        <View {...getOverrideProps(overrides, "feather / menu")}></View>
        <View {...getOverrideProps(overrides, "feather / bell")}></View>
      </View>
      <Flex
        gap="10px"
        position="absolute"
        top="68px"
        left="158px"
        direction="row"
        alignItems="flex-start"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 367")}
      >
        <Flex
          gap="10px"
          direction="row"
          alignItems="flex-start"
          shrink="0"
          height="44px"
          position="relative"
          padding="10px 10px 10px 10px"
          {...getOverrideProps(overrides, "Frame 1817")}
        >
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="23.4375px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="OLT"
            {...getOverrideProps(overrides, "OLT")}
          ></Text>
        </Flex>
      </Flex>
    </View>
  );
}
