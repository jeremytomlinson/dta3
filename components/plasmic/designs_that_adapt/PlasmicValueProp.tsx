// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: cWxJnkpDqV5Dir3LuN8T7J
// Component: ea8aTU-UwGZP
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_designs_that_adapt.module.css"; // plasmic-import: cWxJnkpDqV5Dir3LuN8T7J/projectcss
import * as sty from "./PlasmicValueProp.module.css"; // plasmic-import: ea8aTU-UwGZP/css

export type PlasmicValueProp__VariantMembers = {
  flatIcon: "flatIcon";
  vertical: "vertical";
  card: "card";
  noTitle: "noTitle";
  darkBackground: "darkBackground";
};

export type PlasmicValueProp__VariantsArgs = {
  flatIcon?: SingleBooleanChoiceArg<"flatIcon">;
  vertical?: SingleBooleanChoiceArg<"vertical">;
  card?: SingleBooleanChoiceArg<"card">;
  noTitle?: SingleBooleanChoiceArg<"noTitle">;
  darkBackground?: SingleBooleanChoiceArg<"darkBackground">;
};

type VariantPropType = keyof PlasmicValueProp__VariantsArgs;
export const PlasmicValueProp__VariantProps = new Array<VariantPropType>(
  "flatIcon",
  "vertical",
  "card",
  "noTitle",
  "darkBackground"
);

export type PlasmicValueProp__ArgsType = {
  description?: React.ReactNode;
  icon?: React.ReactNode;
  title?: React.ReactNode;
};

type ArgPropType = keyof PlasmicValueProp__ArgsType;
export const PlasmicValueProp__ArgProps = new Array<ArgPropType>(
  "description",
  "icon",
  "title"
);

export type PlasmicValueProp__OverridesType = {
  root?: p.Flex<"div">;
  iconContainer?: p.Flex<"div">;
  contentContainer?: p.Flex<"div">;
};

export interface DefaultValuePropProps {
  description?: React.ReactNode;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  flatIcon?: SingleBooleanChoiceArg<"flatIcon">;
  vertical?: SingleBooleanChoiceArg<"vertical">;
  card?: SingleBooleanChoiceArg<"card">;
  noTitle?: SingleBooleanChoiceArg<"noTitle">;
  darkBackground?: SingleBooleanChoiceArg<"darkBackground">;
  className?: string;
}

function PlasmicValueProp__RenderFunc(props: {
  variants: PlasmicValueProp__VariantsArgs;
  args: PlasmicValueProp__ArgsType;
  overrides: PlasmicValueProp__OverridesType;
  dataFetches?: PlasmicValueProp__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        defaultcss.all,
        projectcss.all,
        projectcss.root_reset,
        sty.root,
        {
          [sty.root__card]: hasVariant(variants, "card", "card"),
          [sty.root__card_vertical]:
            hasVariant(variants, "card", "card") &&
            hasVariant(variants, "vertical", "vertical"),
          [sty.root__flatIcon]: hasVariant(variants, "flatIcon", "flatIcon"),
          [sty.root__noTitle]: hasVariant(variants, "noTitle", "noTitle"),
          [sty.root__vertical]: hasVariant(variants, "vertical", "vertical")
        }
      )}
    >
      <div
        data-plasmic-name={"iconContainer"}
        data-plasmic-override={overrides.iconContainer}
        className={classNames(
          defaultcss.all,
          projectcss.all,
          sty.iconContainer,
          {
            [sty.iconContainer__card]: hasVariant(variants, "card", "card"),
            [sty.iconContainer__card_vertical]:
              hasVariant(variants, "card", "card") &&
              hasVariant(variants, "vertical", "vertical"),
            [sty.iconContainer__flatIcon]: hasVariant(
              variants,
              "flatIcon",
              "flatIcon"
            ),
            [sty.iconContainer__vertical]: hasVariant(
              variants,
              "vertical",
              "vertical"
            )
          }
        )}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img___2MpOo)}
              displayHeight={"56px" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"none" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"56px" as const}
              src={
                "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/twitter/281/red-apple_1f34e.png" as const
              }
            />
          ),

          value: args.icon
        })}
      </div>

      <p.Stack
        as={"div"}
        data-plasmic-name={"contentContainer"}
        data-plasmic-override={overrides.contentContainer}
        hasGap={true}
        className={classNames(
          defaultcss.all,
          projectcss.all,
          sty.contentContainer,
          {
            [sty.contentContainer__flatIcon]: hasVariant(
              variants,
              "flatIcon",
              "flatIcon"
            ),
            [sty.contentContainer__noTitle]: hasVariant(
              variants,
              "noTitle",
              "noTitle"
            )
          }
        )}
      >
        {(hasVariant(variants, "noTitle", "noTitle") ? false : true)
          ? p.renderPlasmicSlot({
              defaultContents: "Label",
              value: args.title,
              className: classNames(sty.slotTargetTitle, {
                [sty.slotTargetTitle__darkBackground]: hasVariant(
                  variants,
                  "darkBackground",
                  "darkBackground"
                ),
                [sty.slotTargetTitle__noTitle]: hasVariant(
                  variants,
                  "noTitle",
                  "noTitle"
                )
              })
            })
          : null}
        {p.renderPlasmicSlot({
          defaultContents:
            "Porttitor feugiat a scelerisque nullam parturient vestibulum tempor a litora suscipit arcu potenti varius venenatis venenatis dapibus fames adipiscing in in taciti.",
          value: args.description,
          className: classNames(sty.slotTargetDescription, {
            [sty.slotTargetDescription__card]: hasVariant(
              variants,
              "card",
              "card"
            ),
            [sty.slotTargetDescription__darkBackground]: hasVariant(
              variants,
              "darkBackground",
              "darkBackground"
            ),
            [sty.slotTargetDescription__noTitle]: hasVariant(
              variants,
              "noTitle",
              "noTitle"
            )
          })
        })}
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "iconContainer", "contentContainer"],
  iconContainer: ["iconContainer"],
  contentContainer: ["contentContainer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  iconContainer: "div";
  contentContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicValueProp__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicValueProp__VariantsArgs;
    args?: PlasmicValueProp__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicValueProp__Fetches;
  } & Omit<PlasmicValueProp__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicValueProp__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicValueProp__ArgProps,
      internalVariantPropNames: PlasmicValueProp__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicValueProp__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicValueProp";
  } else {
    func.displayName = `PlasmicValueProp.${nodeName}`;
  }
  return func;
}

export const PlasmicValueProp = Object.assign(
  // Top-level PlasmicValueProp renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    iconContainer: makeNodeComponent("iconContainer"),
    contentContainer: makeNodeComponent("contentContainer"),

    // Metadata about props expected for PlasmicValueProp
    internalVariantProps: PlasmicValueProp__VariantProps,
    internalArgProps: PlasmicValueProp__ArgProps
  }
);

export default PlasmicValueProp;
/* prettier-ignore-end */
