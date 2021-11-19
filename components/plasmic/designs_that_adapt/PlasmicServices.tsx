// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: cWxJnkpDqV5Dir3LuN8T7J
// Component: Q6PgPsaN-I1y
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
import Navbar from "../../Navbar"; // plasmic-import: lGDTI_08hU3b/component
import ValueProp from "../../ValueProp"; // plasmic-import: ea8aTU-UwGZP/component
import PriceCard from "../../PriceCard"; // plasmic-import: XlITRR0mG4ll/component
import FooterSection from "../../FooterSection"; // plasmic-import: z6G6JfQ4HcTJ/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: btwHc1KiU8Wp/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_designs_that_adapt.module.css"; // plasmic-import: cWxJnkpDqV5Dir3LuN8T7J/projectcss
import * as sty from "./PlasmicServices.module.css"; // plasmic-import: Q6PgPsaN-I1y/css

import HammerIcon from "./icons/PlasmicIcon__Hammer"; // plasmic-import: RW9Eo-bfVaLh/icon
import TargetIcon from "./icons/PlasmicIcon__Target"; // plasmic-import: 6K-9832SePvp/icon
import FastIcon from "./icons/PlasmicIcon__Fast"; // plasmic-import: 1oNSKHIUbAHg/icon
import StrongIcon from "./icons/PlasmicIcon__Strong"; // plasmic-import: 6dzfiMhsbIUx/icon
import CheckIcon from "./icons/PlasmicIcon__Check"; // plasmic-import: 1dHhpVVNIjoe/icon

export type PlasmicServices__VariantMembers = {};

export type PlasmicServices__VariantsArgs = {};
type VariantPropType = keyof PlasmicServices__VariantsArgs;
export const PlasmicServices__VariantProps = new Array<VariantPropType>();

export type PlasmicServices__ArgsType = {};
type ArgPropType = keyof PlasmicServices__ArgsType;
export const PlasmicServices__ArgProps = new Array<ArgPropType>();

export type PlasmicServices__OverridesType = {
  root?: p.Flex<"div">;
  navbar?: p.Flex<typeof Navbar>;
  foreground?: p.Flex<"div">;
  foreground2?: p.Flex<"div">;
  section?: p.Flex<"section">;
  foreground3?: p.Flex<"div">;
  h2?: p.Flex<"h2">;
  columns?: p.Flex<"div">;
  footerSection?: p.Flex<typeof FooterSection>;
};

export interface DefaultServicesProps {
  dataFetches: PlasmicServices__Fetches;
}

function PlasmicServices__RenderFunc(props: {
  variants: PlasmicServices__VariantsArgs;
  args: PlasmicServices__ArgsType;
  overrides: PlasmicServices__OverridesType;
  dataFetches?: PlasmicServices__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{"Services"}</title>
        <meta key="og:title" property="og:title" content={"Services"} />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={defaultcss.plasmic_page_wrapper}>
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
          <Navbar
            data-plasmic-name={"navbar"}
            data-plasmic-override={overrides.navbar}
            className={classNames("__wab_instance", sty.navbar)}
          />

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(
              defaultcss.all,
              projectcss.all,
              sty.freeBox__nopEc
            )}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"foreground"}
              data-plasmic-override={overrides.foreground}
              hasGap={true}
              className={classNames(
                defaultcss.all,
                projectcss.all,
                sty.foreground
              )}
            >
              <div
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  defaultcss.__wab_text,
                  sty.text__dUkvH
                )}
              >
                {"Our services"}
              </div>

              <div
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  defaultcss.__wab_text,
                  sty.text__ivNEj
                )}
              >
                {
                  "A euismod eros a hendrerit tristique suscipit sit aptent dolor adipiscing inceptos cras ullamcorper a vivamus parturient."
                }
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"foreground2"}
              data-plasmic-override={overrides.foreground2}
              hasGap={true}
              className={classNames(
                defaultcss.all,
                projectcss.all,
                sty.foreground2
              )}
            >
              <ValueProp
                card={"card" as const}
                className={classNames("__wab_instance", sty.valueProp__jg2Lq)}
                description={
                  "Quis iaculis tempor a condimentum per eu montes quis inceptos mi et dis suspendisse integer dui. Orci ad pharetra a vestibulum parturient mauris ac nisl cursus at a vestibulum morbi conubia suspendisse massa vestibulum a varius."
                }
                icon={
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img___9CCh)}
                    displayHeight={"56px" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"56px" as const}
                    src={{
                      src: "/plasmic/designs_that_adapt/images/chart.png",
                      fullWidth: 144,
                      fullHeight: 144,
                      aspectRatio: undefined
                    }}
                  />
                }
                title={"Accomplish more"}
              />

              <ValueProp
                card={"card" as const}
                className={classNames("__wab_instance", sty.valueProp__ek95)}
                description={
                  "Ut interdum consectetur a interdum parturient blandit vestibulum vel quisque quis lorem libero imperdiet a sed massa quisque rhoncus sed cum quisque morbi."
                }
                icon={
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__qm9KB)}
                    displayHeight={"56px" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"56px" as const}
                    src={{
                      src: "/plasmic/designs_that_adapt/images/sparkle.png",
                      fullWidth: 144,
                      fullHeight: 144,
                      aspectRatio: undefined
                    }}
                  />
                }
                title={"Best-in-class"}
              />

              <ValueProp
                card={"card" as const}
                className={classNames("__wab_instance", sty.valueProp__mtg00)}
                description={
                  "Ullamcorper adipiscing adipiscing euismod odio nascetur eu magnis pretium arcu fermentum a eget cubilia tempor. Eu cubilia sodales vestibulum massa non ipsum consectetur lorem nibh parturient parturient vestibulum cum cras penatibus donec dui sit sed eleifend conubia condimentum parturient rutrum."
                }
                icon={
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__h2RiV)}
                    displayHeight={"56px" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"56px" as const}
                    src={{
                      src: "/plasmic/designs_that_adapt/images/medal.png",
                      fullWidth: 144,
                      fullHeight: 144,
                      aspectRatio: undefined
                    }}
                  />
                }
                title={"Championship award-winners"}
              />

              <ValueProp
                card={"card" as const}
                className={classNames("__wab_instance", sty.valueProp__rUnMk)}
                description={
                  "Est parturient imperdiet proin inceptos parturient dignissim risus auctor cubilia cum iaculis eu feugiat justo eu vel at non nisl laoreet ligula porttitor a nunc ac cum habitant urna."
                }
                icon={
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__aogJt)}
                    displayHeight={"56px" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"56px" as const}
                    src={{
                      src: "/plasmic/designs_that_adapt/images/trophy.png",
                      fullWidth: 144,
                      fullHeight: 144,
                      aspectRatio: undefined
                    }}
                  />
                }
                title={"Destined for greatness"}
              />
            </p.Stack>
          </p.Stack>

          <section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames(defaultcss.all, projectcss.all, sty.section)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"foreground3"}
              data-plasmic-override={overrides.foreground3}
              hasGap={true}
              className={classNames(
                defaultcss.all,
                projectcss.all,
                sty.foreground3
              )}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.freeBox__tq4E9
                )}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    sty.freeBox__wrnqw
                  )}
                >
                  <h2
                    data-plasmic-name={"h2"}
                    data-plasmic-override={overrides.h2}
                    className={classNames(
                      defaultcss.h2,
                      projectcss.h2,
                      defaultcss.__wab_text,
                      sty.h2
                    )}
                  >
                    {"Next-level"}
                  </h2>
                </div>

                <div
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    defaultcss.__wab_text,
                    sty.text__aipGo
                  )}
                >
                  {"Dui urna enim a tempus commodo adipiscing ullamcorper."}
                </div>
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.freeBox___5Qyl
                )}
              >
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"columns"}
                  data-plasmic-override={overrides.columns}
                  hasGap={true}
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    sty.columns
                  )}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      projectcss.all,
                      sty.column___1NtCw
                    )}
                  >
                    <ValueProp
                      className={classNames(
                        "__wab_instance",
                        sty.valueProp__ggnIs
                      )}
                      darkBackground={"darkBackground" as const}
                      description={
                        <div
                          className={classNames(
                            defaultcss.all,
                            projectcss.all,
                            defaultcss.__wab_text,
                            sty.text__uyF2F
                          )}
                        >
                          {
                            "Nulla odio mauris enim parturient adipiscing vestibulum inceptos."
                          }
                        </div>
                      }
                      icon={
                        <HammerIcon
                          className={classNames(
                            defaultcss.all,
                            projectcss.all,
                            sty.svg__dp3Ig
                          )}
                          role={"img"}
                        />
                      }
                      title={"Harder"}
                      vertical={"vertical" as const}
                    />
                  </div>

                  <div
                    className={classNames(
                      defaultcss.all,
                      projectcss.all,
                      sty.column___9IFt
                    )}
                  >
                    <ValueProp
                      className={classNames(
                        "__wab_instance",
                        sty.valueProp___3IZuk
                      )}
                      darkBackground={"darkBackground" as const}
                      description={
                        <div
                          className={classNames(
                            defaultcss.all,
                            projectcss.all,
                            defaultcss.__wab_text,
                            sty.text__nvsgY
                          )}
                        >
                          {
                            "Consequat scelerisque a eros taciti nisl a sodales."
                          }
                        </div>
                      }
                      icon={
                        <TargetIcon
                          className={classNames(
                            defaultcss.all,
                            projectcss.all,
                            sty.svg__gMj5C
                          )}
                          role={"img"}
                        />
                      }
                      title={"Better"}
                      vertical={"vertical" as const}
                    />
                  </div>

                  <div
                    className={classNames(
                      defaultcss.all,
                      projectcss.all,
                      sty.column__jF9YM
                    )}
                  >
                    <ValueProp
                      className={classNames(
                        "__wab_instance",
                        sty.valueProp__g5HXv
                      )}
                      darkBackground={"darkBackground" as const}
                      description={
                        <div
                          className={classNames(
                            defaultcss.all,
                            projectcss.all,
                            defaultcss.__wab_text,
                            sty.text__vDqNt
                          )}
                        >
                          {
                            "Varius ad malesuada ullamcorper cursus scelerisque a a."
                          }
                        </div>
                      }
                      icon={
                        <FastIcon
                          className={classNames(
                            defaultcss.all,
                            projectcss.all,
                            sty.svg__zonqM
                          )}
                          role={"img"}
                        />
                      }
                      title={"Faster"}
                      vertical={"vertical" as const}
                    />
                  </div>

                  <div
                    className={classNames(
                      defaultcss.all,
                      projectcss.all,
                      sty.column___0ChR
                    )}
                  >
                    <ValueProp
                      className={classNames(
                        "__wab_instance",
                        sty.valueProp__ghCxa
                      )}
                      darkBackground={"darkBackground" as const}
                      description={
                        <div
                          className={classNames(
                            defaultcss.all,
                            projectcss.all,
                            defaultcss.__wab_text,
                            sty.text__rnesU
                          )}
                        >
                          {
                            "Ut eu nam nostra taciti congue adipiscing curabitur."
                          }
                        </div>
                      }
                      icon={
                        <StrongIcon
                          className={classNames(
                            defaultcss.all,
                            projectcss.all,
                            sty.svg__zFgUa
                          )}
                          role={"img"}
                        />
                      }
                      title={"Stronger"}
                      vertical={"vertical" as const}
                    />
                  </div>
                </p.Stack>
              </p.Stack>
            </p.Stack>
          </section>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(
              defaultcss.all,
              projectcss.all,
              sty.freeBox___1ZoTn
            )}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(
                defaultcss.all,
                projectcss.all,
                sty.freeBox__p9Ho
              )}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.freeBox__nUPd5
                )}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    sty.freeBox__iu77
                  )}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      projectcss.all,
                      defaultcss.__wab_text,
                      sty.text__maCfi
                    )}
                  >
                    {"Pricing plans"}
                  </div>
                </div>

                <div
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    defaultcss.__wab_text,
                    sty.text__naKWo
                  )}
                >
                  {
                    "Nascetur nascetur ridiculus scelerisque adipiscing a nascetur varius sed eu a ad semper a est nec litora ante at orci rhoncus a varius auctor aliquam inceptos vestibulum ridiculus."
                  }
                </div>
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.freeBox__r1Pld
                )}
              >
                <PriceCard
                  className={classNames("__wab_instance", sty.priceCard__geuxH)}
                  description={
                    <React.Fragment>
                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp___46Qqm
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={"flatIcon" as const}
                        icon={
                          <CheckIcon
                            className={classNames(
                              defaultcss.all,
                              projectcss.all,
                              sty.svg__fShOr
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={"noTitle" as const}
                      />

                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__lAclv
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={"flatIcon" as const}
                        icon={
                          <CheckIcon
                            className={classNames(
                              defaultcss.all,
                              projectcss.all,
                              sty.svg__gz276
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={"noTitle" as const}
                      />
                    </React.Fragment>
                  }
                  dollars={"0"}
                />

                <PriceCard
                  action={
                    <div
                      className={classNames(
                        defaultcss.all,
                        projectcss.all,
                        defaultcss.__wab_text,
                        sty.text__m4JvC
                      )}
                    >
                      {"Buy Pro"}
                    </div>
                  }
                  className={classNames("__wab_instance", sty.priceCard__fbov)}
                  description={
                    <React.Fragment>
                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__w5Zvw
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={"flatIcon" as const}
                        icon={
                          <CheckIcon
                            className={classNames(
                              defaultcss.all,
                              projectcss.all,
                              sty.svg__pR2HP
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={"noTitle" as const}
                      />

                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp___2XKc
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={"flatIcon" as const}
                        icon={
                          <CheckIcon
                            className={classNames(
                              defaultcss.all,
                              projectcss.all,
                              sty.svg___1CoDz
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={"noTitle" as const}
                      />

                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp___6OxjB
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={"flatIcon" as const}
                        icon={
                          <CheckIcon
                            className={classNames(
                              defaultcss.all,
                              projectcss.all,
                              sty.svg__vItKx
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={"noTitle" as const}
                      />
                    </React.Fragment>
                  }
                  dollars={"8"}
                  label={
                    <div
                      className={classNames(
                        defaultcss.all,
                        projectcss.all,
                        defaultcss.__wab_text,
                        sty.text__jDAoo
                      )}
                    >
                      {"Pro"}
                    </div>
                  }
                />

                <PriceCard
                  action={
                    <div
                      className={classNames(
                        defaultcss.all,
                        projectcss.all,
                        defaultcss.__wab_text,
                        sty.text__p3S4Y
                      )}
                    >
                      {"Buy Team"}
                    </div>
                  }
                  className={classNames("__wab_instance", sty.priceCard__wp9Lg)}
                  description={
                    <React.Fragment>
                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__r7WJi
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={"flatIcon" as const}
                        icon={
                          <CheckIcon
                            className={classNames(
                              defaultcss.all,
                              projectcss.all,
                              sty.svg__f9Jli
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={"noTitle" as const}
                      />

                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__uttzx
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={"flatIcon" as const}
                        icon={
                          <CheckIcon
                            className={classNames(
                              defaultcss.all,
                              projectcss.all,
                              sty.svg__xuHlg
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={"noTitle" as const}
                      />

                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__gjc3D
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={"flatIcon" as const}
                        icon={
                          <CheckIcon
                            className={classNames(
                              defaultcss.all,
                              projectcss.all,
                              sty.svg___5Gil1
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={"noTitle" as const}
                      />

                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__ibix0
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={"flatIcon" as const}
                        icon={
                          <CheckIcon
                            className={classNames(
                              defaultcss.all,
                              projectcss.all,
                              sty.svg__sSwOz
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={"noTitle" as const}
                      />
                    </React.Fragment>
                  }
                  dollars={"16"}
                  label={
                    <div
                      className={classNames(
                        defaultcss.all,
                        projectcss.all,
                        defaultcss.__wab_text,
                        sty.text__jZpsz
                      )}
                    >
                      {"Team"}
                    </div>
                  }
                />

                <PriceCard
                  action={
                    <div
                      className={classNames(
                        defaultcss.all,
                        projectcss.all,
                        defaultcss.__wab_text,
                        sty.text__wnWzT
                      )}
                    >
                      {"Contact us"}
                    </div>
                  }
                  className={classNames("__wab_instance", sty.priceCard__hPU4)}
                  description={
                    <React.Fragment>
                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__j2Xv
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={"flatIcon" as const}
                        icon={
                          <CheckIcon
                            className={classNames(
                              defaultcss.all,
                              projectcss.all,
                              sty.svg__mLoj
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={"noTitle" as const}
                      />

                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp___7D0Bp
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={"flatIcon" as const}
                        icon={
                          <CheckIcon
                            className={classNames(
                              defaultcss.all,
                              projectcss.all,
                              sty.svg__sgERw
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={"noTitle" as const}
                      />

                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__fegU
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={"flatIcon" as const}
                        icon={
                          <CheckIcon
                            className={classNames(
                              defaultcss.all,
                              projectcss.all,
                              sty.svg__kcDHi
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={"noTitle" as const}
                      />

                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__c2Gl8
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={"flatIcon" as const}
                        icon={
                          <CheckIcon
                            className={classNames(
                              defaultcss.all,
                              projectcss.all,
                              sty.svg__oXHms
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={"noTitle" as const}
                      />
                    </React.Fragment>
                  }
                  dollars={"?"}
                  label={
                    <div
                      className={classNames(
                        defaultcss.all,
                        projectcss.all,
                        defaultcss.__wab_text,
                        sty.text___9QdjW
                      )}
                    >
                      {"Enterprise"}
                    </div>
                  }
                  primary={"primary" as const}
                />
              </p.Stack>
            </p.Stack>
          </p.Stack>

          <FooterSection
            data-plasmic-name={"footerSection"}
            data-plasmic-override={overrides.footerSection}
            className={classNames("__wab_instance", sty.footerSection)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "navbar",
    "foreground",
    "foreground2",
    "section",
    "foreground3",
    "h2",
    "columns",
    "footerSection"
  ],
  navbar: ["navbar"],
  foreground: ["foreground"],
  foreground2: ["foreground2"],
  section: ["section", "foreground3", "h2", "columns"],
  foreground3: ["foreground3", "h2", "columns"],
  h2: ["h2"],
  columns: ["columns"],
  footerSection: ["footerSection"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar: typeof Navbar;
  foreground: "div";
  foreground2: "div";
  section: "section";
  foreground3: "div";
  h2: "h2";
  columns: "div";
  footerSection: typeof FooterSection;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicServices__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicServices__VariantsArgs;
    args?: PlasmicServices__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicServices__Fetches;
  } & Omit<PlasmicServices__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicServices__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicServices__ArgProps,
      internalVariantPropNames: PlasmicServices__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicServices__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicServices";
  } else {
    func.displayName = `PlasmicServices.${nodeName}`;
  }
  return func;
}

export const PlasmicServices = Object.assign(
  // Top-level PlasmicServices renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    foreground: makeNodeComponent("foreground"),
    foreground2: makeNodeComponent("foreground2"),
    section: makeNodeComponent("section"),
    foreground3: makeNodeComponent("foreground3"),
    h2: makeNodeComponent("h2"),
    columns: makeNodeComponent("columns"),
    footerSection: makeNodeComponent("footerSection"),

    // Metadata about props expected for PlasmicServices
    internalVariantProps: PlasmicServices__VariantProps,
    internalArgProps: PlasmicServices__ArgProps
  }
);

export default PlasmicServices;
/* prettier-ignore-end */
