// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: cWxJnkpDqV5Dir3LuN8T7J
// Component: cmACKX_Yh2R8
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
import * as sty from "./PlasmicSection.module.css"; // plasmic-import: cmACKX_Yh2R8/css

export type PlasmicSection__VariantMembers = {
  background: "dark" | "gray";
  size: "fullContentWidth";
};

export type PlasmicSection__VariantsArgs = {
  background?: SingleChoiceArg<"dark" | "gray">;
  size?: SingleChoiceArg<"fullContentWidth">;
};

type VariantPropType = keyof PlasmicSection__VariantsArgs;
export const PlasmicSection__VariantProps = new Array<VariantPropType>(
  "background",
  "size"
);

export type PlasmicSection__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicSection__ArgsType;
export const PlasmicSection__ArgProps = new Array<ArgPropType>("children");

export type PlasmicSection__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
};

export interface DefaultSectionProps {
  children?: React.ReactNode;
  background?: SingleChoiceArg<"dark" | "gray">;
  size?: SingleChoiceArg<"fullContentWidth">;
  className?: string;
}

function PlasmicSection__RenderFunc(props: {
  variants: PlasmicSection__VariantsArgs;
  args: PlasmicSection__ArgsType;
  overrides: PlasmicSection__OverridesType;
  dataFetches?: PlasmicSection__Fetches;
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
        sty.root,
        {
          [sty.root__background_dark]: hasVariant(
            variants,
            "background",
            "dark"
          ),
          [sty.root__background_gray]: hasVariant(
            variants,
            "background",
            "gray"
          ),
          [sty.root__size_fullContentWidth]: hasVariant(
            variants,
            "size",
            "fullContentWidth"
          )
        }
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(defaultcss.all, projectcss.all, sty.freeBox, {
          [sty.freeBox__size_fullContentWidth]: hasVariant(
            variants,
            "size",
            "fullContentWidth"
          )
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: null,
          value: args.children
        })}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSection__VariantsArgs;
    args?: PlasmicSection__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicSection__Fetches;
  } & Omit<PlasmicSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSection__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicSection__ArgProps,
      internalVariantPropNames: PlasmicSection__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicSection__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSection";
  } else {
    func.displayName = `PlasmicSection.${nodeName}`;
  }
  return func;
}

export const PlasmicSection = Object.assign(
  // Top-level PlasmicSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicSection
    internalVariantProps: PlasmicSection__VariantProps,
    internalArgProps: PlasmicSection__ArgProps
  }
);

export default PlasmicSection;
/* prettier-ignore-end */
