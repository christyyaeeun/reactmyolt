/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useAuth,
  useDataStoreCreateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { UserEntry } from "../models";
import { Flex, Text, TextField, View } from "@aws-amplify/ui-react";
export default function Entry1(props) {
  const { EntryInput, overrides, ...rest } = props;
  const authAttributes = useAuth().user?.attributes ?? {};
  const [textFieldikhValue, setTextFieldikhValue] = useStateMutationAction("");
  const [textFieldsqmValue, setTextFieldsqmValue] = useStateMutationAction("");
  const buttonOnClick = useDataStoreCreateAction({
    fields: {
      title: textFieldikhValue,
      content: textFieldsqmValue,
      userprofileID: authAttributes["email"],
    },
    model: UserEntry,
  });
  return (
    <Flex
      gap="10px"
      direction="row"
      height="361px"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      borderRadius="8px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(245,245,245,1)"
      {...rest}
      {...getOverrideProps(overrides, "Entry1")}
    >
      <View
        width="351px"
        height="361px"
        shrink="0"
        position="relative"
        borderRadius="12px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "e-attempt")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="300px"
          height="244px"
          position="absolute"
          top="68px"
          left="25px"
          {...getOverrideProps(overrides, "Group 368")}
        >
          <Flex
            gap="36px"
            position="absolute"
            top="0px"
            left="0px"
            direction="column"
            width="300px"
            height="244px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 368haz")}
          >
            <Flex
              gap="22px"
              direction="column"
              height="174px"
              grow="1"
              basis="174px"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 368hvb")}
            >
              <TextField
                display="flex"
                shrink="0"
                alignSelf="stretch"
                objectFit="cover"
                size="large"
                labelHidden={true}
                variation="default"
                className={EntryInput?.title}
                value={textFieldikhValue}
                onChange={(event) => {
                  setTextFieldikhValue(event.target.value);
                }}
                {...getOverrideProps(overrides, "TextFieldikh")}
              ></TextField>
              <TextField
                display="flex"
                height="112px"
                grow="1"
                basis="112px"
                alignSelf="stretch"
                objectFit="cover"
                size="large"
                labelHidden={true}
                variation="default"
                isMultiline={true}
                className={EntryInput?.content}
                value={textFieldsqmValue}
                onChange={(event) => {
                  setTextFieldsqmValue(event.target.value);
                }}
                {...getOverrideProps(overrides, "TextFieldsqm")}
              ></TextField>
            </Flex>
            <Flex
              gap="0"
              direction="row"
              width="135px"
              height="34px"
              justifyContent="center"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              borderRadius="4px"
              padding="8px 12px 8px 12px"
              backgroundColor="rgba(173,200,251,1)"
              onClick={() => {
                buttonOnClick();
              }}
              {...getOverrideProps(overrides, "Button")}
            >
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="700"
                color="rgba(255,255,255,1)"
                lineHeight="18px"
                textAlign="center"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                letterSpacing="0.41px"
                width="111px"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="save"
                {...getOverrideProps(overrides, "\u270F\uFE0F Button text")}
              ></Text>
            </Flex>
          </Flex>
        </View>
      </View>
    </Flex>
  );
}
