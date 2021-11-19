// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: cWxJnkpDqV5Dir3LuN8T7J
// Component: FlEVYP-fDRAs
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
import Button from "../../Button"; // plasmic-import: qSeAbp0kIsSm/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_designs_that_adapt.module.css"; // plasmic-import: cWxJnkpDqV5Dir3LuN8T7J/projectcss
import * as sty from "./PlasmicBanner.module.css"; // plasmic-import: FlEVYP-fDRAs/css

import AppleIcon from "./icons/PlasmicIcon__Apple"; // plasmic-import: nm53oq749Z3H/icon

export type PlasmicBanner__VariantMembers = {};

export type PlasmicBanner__VariantsArgs = {};
type VariantPropType = keyof PlasmicBanner__VariantsArgs;
export const PlasmicBanner__VariantProps = new Array<VariantPropType>();

export type PlasmicBanner__ArgsType = {
  left?: React.ReactNode;
  image?: string;
};

type ArgPropType = keyof PlasmicBanner__ArgsType;
export const PlasmicBanner__ArgProps = new Array<ArgPropType>("left", "image");

export type PlasmicBanner__OverridesType = {
  root?: p.Flex<"div">;
  right?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  gradient?: p.Flex<"div">;
  left?: p.Flex<"div">;
};

export interface DefaultBannerProps {
  left?: React.ReactNode;
  image?: string;
  className?: string;
}

function PlasmicBanner__RenderFunc(props: {
  variants: PlasmicBanner__VariantsArgs;
  args: PlasmicBanner__ArgsType;
  overrides: PlasmicBanner__OverridesType;
  dataFetches?: PlasmicBanner__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        defaultcss.all,
        projectcss.all,
        projectcss.root_reset,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"right"}
        data-plasmic-override={overrides.right}
        className={classNames(defaultcss.all, projectcss.all, sty.right)}
      >
        <p.PlasmicImg
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(sty.img)}
          displayHeight={"100%" as const}
          displayMaxHeight={"none" as const}
          displayMaxWidth={"none" as const}
          displayMinHeight={"0" as const}
          displayMinWidth={"0" as const}
          displayWidth={"100%" as const}
          src={
            args.image !== undefined
              ? args.image
              : {
                  src: "/plasmic/designs_that_adapt/images/sunglassesMale.jpeg",
                  fullWidth: 2851,
                  fullHeight: 1900,
                  aspectRatio: undefined
                }
          }
        />

        {true ? (
          <div
            data-plasmic-name={"gradient"}
            data-plasmic-override={overrides.gradient}
            className={classNames(defaultcss.all, projectcss.all, sty.gradient)}
          />
        ) : null}
      </div>

      <p.Stack
        as={"div"}
        data-plasmic-name={"left"}
        data-plasmic-override={overrides.left}
        hasGap={true}
        className={classNames(defaultcss.all, projectcss.all, sty.left)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <div
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  defaultcss.__wab_text,
                  sty.text__biNbt
                )}
              >
                {"Sunglasses Collection"}
              </div>

              <div
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  defaultcss.__wab_text,
                  sty.text__g8ML9
                )}
              >
                {"Get 25% off on selected items"}
              </div>

              <Button>
                <div
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    defaultcss.__wab_text,
                    sty.text__yJmyO
                  )}
                >
                  {"Go to collection ->"}
                </div>
              </Button>
            </React.Fragment>
          ),
          value: args.left
        })}
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "right", "img", "gradient", "left"],
  right: ["right", "img", "gradient"],
  img: ["img"],
  gradient: ["gradient"],
  left: ["left"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  right: "div";
  img: typeof p.PlasmicImg;
  gradient: "div";
  left: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBanner__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBanner__VariantsArgs;
    args?: PlasmicBanner__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicBanner__Fetches;
  } & Omit<PlasmicBanner__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicBanner__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicBanner__ArgProps,
      internalVariantPropNames: PlasmicBanner__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicBanner__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBanner";
  } else {
    func.displayName = `PlasmicBanner.${nodeName}`;
  }
  return func;
}

export const PlasmicBanner = Object.assign(
  // Top-level PlasmicBanner renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    right: makeNodeComponent("right"),
    img: makeNodeComponent("img"),
    gradient: makeNodeComponent("gradient"),
    left: makeNodeComponent("left"),

    // Metadata about props expected for PlasmicBanner
    internalVariantProps: PlasmicBanner__VariantProps,
    internalArgProps: PlasmicBanner__ArgProps
  }
);

export default PlasmicBanner;
/* prettier-ignore-end */
