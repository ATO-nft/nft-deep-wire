// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: j5CDP9MgqbRapi7mxENKQG
// Component: TpXp-HtNY_R
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

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
import Button from "../../Button"; // plasmic-import: a9hmcfoqSQcWZ/component

import { useScreenVariants as useScreenVariantsi1EpI54Sd5XS4R } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: i1epI54SD5xS4r/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_nft_deep_wire.module.css"; // plasmic-import: j5CDP9MgqbRapi7mxENKQG/projectcss
import sty from "./PlasmicShades.module.css"; // plasmic-import: TpXp-HtNY_R/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: SpSM8I8Z8pYH6F/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: GDo5sayAt37nOm/icon
import violaGrappeXMapeintureProcompngNI20KBB from "./images/violaGrappeXMapeintureProcompng.png"; // plasmic-import: -nI20k-bB/picture
import yakamoIByGuillaumeEtLaurieXMaPeinturePro2022V02Jpg5OWUuqkaS from "./images/yakamoIByGuillaumeEtLaurieXMaPeinturePro2022V02Jpg.jpeg"; // plasmic-import: 5oWUuqkaS/picture
import yakamocolorIByGuillaumeEtLaurieXMaPeinturePro2022V02Jpg5SdSeqe4Q from "./images/yakamocolorIByGuillaumeEtLaurieXMaPeinturePro2022V02Jpg.jpeg"; // plasmic-import: 5SdSeqe4q/picture

export type PlasmicShades__VariantMembers = {};

export type PlasmicShades__VariantsArgs = {};
type VariantPropType = keyof PlasmicShades__VariantsArgs;
export const PlasmicShades__VariantProps = new Array<VariantPropType>();

export type PlasmicShades__ArgsType = {};
type ArgPropType = keyof PlasmicShades__ArgsType;
export const PlasmicShades__ArgProps = new Array<ArgPropType>();

export type PlasmicShades__OverridesType = {
  root?: p.Flex<"div">;
  header2?: p.Flex<"div">;
  connect?: p.Flex<typeof Button>;
  h1?: p.Flex<"h1">;
  h4?: p.Flex<"h4">;
  h5?: p.Flex<"h5">;
  footer?: p.Flex<"div">;
};

export interface DefaultShadesProps {
  className?: string;
}

function PlasmicShades__RenderFunc(props: {
  variants: PlasmicShades__VariantsArgs;
  args: PlasmicShades__ArgsType;
  overrides: PlasmicShades__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsi1EpI54Sd5XS4R()
  });

  return (
    <React.Fragment>
      {}

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <div
            data-plasmic-name={"header2"}
            data-plasmic-override={overrides.header2}
            className={classNames(projectcss.all, sty.header2)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__kX0R)}>
              <a
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__dsT7K
                )}
                href={`/`}
              >
                <React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ fontWeight: 700 }}
                  >
                    {"NDW"}
                  </span>
                </React.Fragment>
              </a>
            </div>

            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__rldhw)}>
                <a
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__hNaa0
                  )}
                  href={`/about`}
                >
                  {"About"}
                </a>

                <a
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link___6I8Pb
                  )}
                  href={`/artist`}
                >
                  {"Artists"}
                </a>

                <a
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__eTzzq
                  )}
                  href={`/vision`}
                >
                  {"Vision"}
                </a>

                <Button
                  data-plasmic-name={"connect"}
                  data-plasmic-override={overrides.connect}
                  className={classNames("__wab_instance", sty.connect)}
                >
                  {"Connect"}
                </Button>
              </div>
            ) : null}
          </div>

          {(
            hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
          ) ? (
            <div className={classNames(projectcss.all, sty.freeBox__mrIb6)}>
              <h1
                data-plasmic-name={"h1"}
                data-plasmic-override={overrides.h1}
                className={classNames(
                  projectcss.all,
                  projectcss.h1,
                  projectcss.__wab_text,
                  sty.h1
                )}
              >
                {hasVariant(globalVariants, "screen", "mobileOnly") ? (
                  <React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ color: "#FFFFFF" }}
                    >
                      {"Collection #1"}
                    </span>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ color: "#FFFFFF" }}
                    >
                      {"Exclusive shades"}
                    </span>
                  </React.Fragment>
                )}
              </h1>

              <a
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__wfSzb
                )}
                href={`/nft`}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__aopw8)}
                  displayHeight={"802px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"auto" as const}
                  loading={"lazy" as const}
                  src={{
                    src: violaGrappeXMapeintureProcompngNI20KBB,
                    fullWidth: 1059,
                    fullHeight: 389,
                    aspectRatio: undefined
                  }}
                />
              </a>

              <h4
                data-plasmic-name={"h4"}
                data-plasmic-override={overrides.h4}
                className={classNames(
                  projectcss.all,
                  projectcss.h4,
                  projectcss.__wab_text,
                  sty.h4
                )}
              >
                {"by Guillaume and Laurie"}
              </h4>

              <h5
                data-plasmic-name={"h5"}
                data-plasmic-override={overrides.h5}
                className={classNames(
                  projectcss.all,
                  projectcss.h5,
                  projectcss.__wab_text,
                  sty.h5
                )}
              >
                {
                  "There will always be some text here. There will always be some text here. There will always be some text here. There will always be some text here. There will always be some text here. There will always be some text here. There will always be some text here. There will always be some text here. There will always be some text here. There will always be some text here. There will always be some text here. There will always be some text here. There will always be some text here. "
                }
              </h5>

              <div className={classNames(projectcss.all, sty.freeBox__r16Ic)}>
                <a
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__f0N4M
                  )}
                  href={`/nft`}
                >
                  <p.PlasmicImg
                    alt={"" as const}
                    className={classNames(sty.img__auGdl)}
                    displayHeight={"180px" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"100%" as const}
                    loading={"lazy" as const}
                    src={{
                      src: violaGrappeXMapeintureProcompngNI20KBB,
                      fullWidth: 1059,
                      fullHeight: 389,
                      aspectRatio: undefined
                    }}
                  />
                </a>

                <a
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__izAlt
                  )}
                  href={`/nft`}
                >
                  <p.PlasmicImg
                    alt={"" as const}
                    className={classNames(sty.img__mpHaX)}
                    displayHeight={"180px" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"100%" as const}
                    loading={"lazy" as const}
                    src={{
                      src: yakamoIByGuillaumeEtLaurieXMaPeinturePro2022V02Jpg5OWUuqkaS,
                      fullWidth: 3508,
                      fullHeight: 4961,
                      aspectRatio: undefined
                    }}
                  />
                </a>

                <a
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__m5Ozz
                  )}
                  href={`/nft`}
                >
                  <p.PlasmicImg
                    alt={"" as const}
                    className={classNames(sty.img__ytLzI)}
                    displayHeight={"180px" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"100%" as const}
                    loading={"lazy" as const}
                    src={{
                      src: yakamocolorIByGuillaumeEtLaurieXMaPeinturePro2022V02Jpg5SdSeqe4Q,
                      fullWidth: 3508,
                      fullHeight: 4961,
                      aspectRatio: undefined
                    }}
                  />
                </a>

                <a
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link___9X5Ug
                  )}
                  href={`/nft`}
                >
                  <p.PlasmicImg
                    alt={"" as const}
                    className={classNames(sty.img___5Aheq)}
                    displayHeight={"180px" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"100%" as const}
                    loading={"lazy" as const}
                    src={{
                      src: yakamocolorIByGuillaumeEtLaurieXMaPeinturePro2022V02Jpg5SdSeqe4Q,
                      fullWidth: 3508,
                      fullHeight: 4961,
                      aspectRatio: undefined
                    }}
                  />
                </a>

                <a
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__oxIsp
                  )}
                  href={`/nft`}
                >
                  <p.PlasmicImg
                    alt={"" as const}
                    className={classNames(sty.img___6ZXcr)}
                    displayHeight={"180px" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"100%" as const}
                    loading={"lazy" as const}
                    src={{
                      src: yakamocolorIByGuillaumeEtLaurieXMaPeinturePro2022V02Jpg5SdSeqe4Q,
                      fullWidth: 3508,
                      fullHeight: 4961,
                      aspectRatio: undefined
                    }}
                  />
                </a>

                <a
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__mRs9J
                  )}
                  href={`/nft`}
                >
                  <p.PlasmicImg
                    alt={"" as const}
                    className={classNames(sty.img__s5SgJ)}
                    displayHeight={"180px" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"100%" as const}
                    loading={"lazy" as const}
                    src={{
                      src: yakamocolorIByGuillaumeEtLaurieXMaPeinturePro2022V02Jpg5SdSeqe4Q,
                      fullWidth: 3508,
                      fullHeight: 4961,
                      aspectRatio: undefined
                    }}
                  />
                </a>

                <a
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__nC6Ey
                  )}
                  href={`/nft`}
                >
                  <p.PlasmicImg
                    alt={"" as const}
                    className={classNames(sty.img__bsl8O)}
                    displayHeight={"180px" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"100%" as const}
                    loading={"lazy" as const}
                    src={{
                      src: yakamocolorIByGuillaumeEtLaurieXMaPeinturePro2022V02Jpg5SdSeqe4Q,
                      fullWidth: 3508,
                      fullHeight: 4961,
                      aspectRatio: undefined
                    }}
                  />
                </a>

                <a
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__lGz06
                  )}
                  href={`/nft`}
                >
                  <p.PlasmicImg
                    alt={"" as const}
                    className={classNames(sty.img__ue3A)}
                    displayHeight={"180px" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"100%" as const}
                    loading={"lazy" as const}
                    src={{
                      src: yakamocolorIByGuillaumeEtLaurieXMaPeinturePro2022V02Jpg5SdSeqe4Q,
                      fullWidth: 3508,
                      fullHeight: 4961,
                      aspectRatio: undefined
                    }}
                  />
                </a>

                <a
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__mt5HO
                  )}
                  href={`/nft`}
                >
                  <p.PlasmicImg
                    alt={"" as const}
                    className={classNames(sty.img___7Qgti)}
                    displayHeight={"180px" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"100%" as const}
                    loading={"lazy" as const}
                    src={{
                      src: yakamocolorIByGuillaumeEtLaurieXMaPeinturePro2022V02Jpg5SdSeqe4Q,
                      fullWidth: 3508,
                      fullHeight: 4961,
                      aspectRatio: undefined
                    }}
                  />
                </a>

                <a
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__ezEl3
                  )}
                  href={`/nft`}
                >
                  <p.PlasmicImg
                    alt={"" as const}
                    className={classNames(sty.img__gLvy)}
                    displayHeight={"180px" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"100%" as const}
                    loading={"lazy" as const}
                    src={{
                      src: yakamocolorIByGuillaumeEtLaurieXMaPeinturePro2022V02Jpg5SdSeqe4Q,
                      fullWidth: 3508,
                      fullHeight: 4961,
                      aspectRatio: undefined
                    }}
                  />
                </a>
              </div>
            </div>
          ) : null}

          <div
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames(projectcss.all, sty.footer)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__dr3Iy)}>
              <a
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__apk6F
                )}
              >
                {hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "NFT Deep Wire\nAll rights reserved © 2022"
                  : "NFT Deep Wire | All rights reserved © 2022"}
              </a>
            </div>

            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__v6Ia3)}>
                <a
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link___5Lmi
                  )}
                  href={`/`}
                >
                  {"Terms & conditions"}
                </a>

                {(
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? true
                    : false
                ) ? (
                  <a
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link__a7I8H
                    )}
                  >
                    {"Contact us"}
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header2", "connect", "h1", "h4", "h5", "footer"],
  header2: ["header2", "connect"],
  connect: ["connect"],
  h1: ["h1"],
  h4: ["h4"],
  h5: ["h5"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header2: "div";
  connect: typeof Button;
  h1: "h1";
  h4: "h4";
  h5: "h5";
  footer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicShades__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicShades__VariantsArgs;
    args?: PlasmicShades__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicShades__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicShades__ArgsType, ReservedPropsType> &
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
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicShades__ArgProps,
          internalVariantPropNames: PlasmicShades__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicShades__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicShades";
  } else {
    func.displayName = `PlasmicShades.${nodeName}`;
  }
  return func;
}

export const PlasmicShades = Object.assign(
  // Top-level PlasmicShades renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header2: makeNodeComponent("header2"),
    connect: makeNodeComponent("connect"),
    h1: makeNodeComponent("h1"),
    h4: makeNodeComponent("h4"),
    h5: makeNodeComponent("h5"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicShades
    internalVariantProps: PlasmicShades__VariantProps,
    internalArgProps: PlasmicShades__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Shades",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicShades;
/* prettier-ignore-end */
