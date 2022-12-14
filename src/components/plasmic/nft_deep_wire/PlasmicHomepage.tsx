// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: j5CDP9MgqbRapi7mxENKQG
// Component: o9LGBwNid8E-e
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
import Header from "../../Header"; // plasmic-import: gr_eq2hlK0/component
import { Reveal } from "@plasmicpkgs/react-awesome-reveal"; // plasmic-import: R6s1FdhksG/codeComponent

import { useScreenVariants as useScreenVariantsi1EpI54Sd5XS4R } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: i1epI54SD5xS4r/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_nft_deep_wire.module.css"; // plasmic-import: j5CDP9MgqbRapi7mxENKQG/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: o9LGBwNid8E-e/css

import piece2GalerieArteMejorjpgO0JtabYhv from "./images/piece2GalerieArteMejorjpg.jpeg"; // plasmic-import: o0JtabYHV/picture
import allegoryOfAgoraphobiajpgRqpfMjqq1 from "./images/allegoryOfAgoraphobiajpg.jpeg"; // plasmic-import: rqpfMjqq1/picture
import violaGrappeXMapeintureProcompngNI20KBB from "./images/violaGrappeXMapeintureProcompng.png"; // plasmic-import: -nI20k-bB/picture

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  h1?: p.Flex<"h1">;
  footer?: p.Flex<"div">;
};

export interface DefaultHomepageProps {
  className?: string;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsi1EpI54Sd5XS4R()
  });

  return (
    <React.Fragment>
      {}

      <div className={projectcss.plasmic_page_wrapper}>
        <p.Stack
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__n4UmO)}>
              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
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
                    "NFT Deep Wire"
                  ) : (
                    <React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ color: "#FFFFFF" }}
                      >
                        {"NFT Deep Wire"}
                      </span>
                    </React.Fragment>
                  )}
                </h1>
              ) : null}

              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__o3Om7)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"auto" as const}
                loading={"lazy" as const}
                src={{
                  src: piece2GalerieArteMejorjpgO0JtabYhv,
                  fullWidth: 1800,
                  fullHeight: 1200,
                  aspectRatio: undefined
                }}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__giEy8
                )}
              >
                <React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ color: "#FFFFFF" }}
                  >
                    {
                      "Hello, make yourself confortable and welcome to NFT Deep Wire! "
                    }
                  </span>
                </React.Fragment>
              </div>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__gAliA
                )}
              >
                <React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ color: "#FFFFFF" }}
                  >
                    {"Our NFT collections"}
                  </span>
                </React.Fragment>
              </div>

              <div className={classNames(projectcss.all, sty.freeBox__nruY4)}>
                <a
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__z6G8
                  )}
                  href={`/jfe`}
                >
                  <Reveal
                    className={classNames("__wab_instance", sty.reveal__fz6Fc)}
                    delay={500 as const}
                    duration={1500 as const}
                    triggerOnce={true}
                  >
                    <p.PlasmicImg
                      alt={"" as const}
                      className={classNames(sty.img__rykaG)}
                      displayHeight={"180px" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"none" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"100%" as const}
                      loading={"lazy" as const}
                      src={{
                        src: allegoryOfAgoraphobiajpgRqpfMjqq1,
                        fullWidth: 6030,
                        fullHeight: 3930,
                        aspectRatio: undefined
                      }}
                    />
                  </Reveal>
                </a>

                <a
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__i5S4W
                  )}
                  href={`/shades`}
                >
                  <Reveal
                    className={classNames("__wab_instance", sty.reveal__uizk3)}
                    delay={600 as const}
                    duration={1500 as const}
                    triggerOnce={true}
                  >
                    <p.PlasmicImg
                      alt={"" as const}
                      className={classNames(sty.img__lmTmf)}
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
                  </Reveal>
                </a>
              </div>
            </div>
          ) : null}

          <div
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames(projectcss.all, sty.footer)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__wqlU8)}>
              <a
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__rmtdD
                )}
              >
                {hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "NFT Deep Wire\nAll rights reserved ?? 2022"
                  : "NFT Deep Wire | All rights reserved ?? 2022"}
              </a>
            </div>

            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__mi35R)}>
                <a
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__rbLKe
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
                      sty.link__beV5G
                    )}
                  >
                    {"Contact us"}
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>
        </p.Stack>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "h1", "footer"],
  header: ["header"],
  h1: ["h1"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  h1: "h1";
  footer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
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
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    h1: makeNodeComponent("h1"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "NFT Deep Wire",
      description: "Your NFT Marketplace.",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
