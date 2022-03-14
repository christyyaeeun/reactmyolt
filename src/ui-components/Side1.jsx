/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, View } from "@aws-amplify/ui-react";
export default function Side1(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="431px"
      height="874px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Side1")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "SideMed")}
      >
        <View
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          overflow="hidden"
          borderRadius="8px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(181,210,220,1)"
          {...getOverrideProps(overrides, "SideBar")}
        ></View>
        <View
          width="490px"
          height="490px"
          position="absolute"
          top="522px"
          left="-29px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 1816")}
        >
          <Icon
            width="490px"
            height="490px"
            viewBox={{ minX: 0, minY: 0, width: 490, height: 490 }}
            paths={[
              {
                d: "M490 245C490 380.31 380.31 490 245 490C109.69 490 0 380.31 0 245C0 109.69 109.69 0 245 0C380.31 0 490 109.69 490 245Z",
                fill: "rgba(255,255,255,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "BG Circle")}
          ></Icon>
        </View>
      </View>
    </View>
  );
}
