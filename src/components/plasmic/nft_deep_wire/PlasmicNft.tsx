// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: j5CDP9MgqbRapi7mxENKQG
// Component: -rZ2FLCY9RqHCq
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
import BidButton from "../../BidButton"; // plasmic-import: TW0Ca_Ns9A2yO/component

import { useScreenVariants as useScreenVariantsi1EpI54Sd5XS4R } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: i1epI54SD5xS4r/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_nft_deep_wire.module.css"; // plasmic-import: j5CDP9MgqbRapi7mxENKQG/projectcss
import sty from "./PlasmicNft.module.css"; // plasmic-import: -rZ2FLCY9RqHCq/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: SpSM8I8Z8pYH6F/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: GDo5sayAt37nOm/icon
import allegoryOfAgoraphobiajpgRqpfMjqq1 from "./images/allegoryOfAgoraphobiajpg.jpeg"; // plasmic-import: rqpfMjqq1/picture

export type PlasmicNft__VariantMembers = {};
export type PlasmicNft__VariantsArgs = {};
type VariantPropType = keyof PlasmicNft__VariantsArgs;
export const PlasmicNft__VariantProps = new Array<VariantPropType>();

export type PlasmicNft__ArgsType = {};
type ArgPropType = keyof PlasmicNft__ArgsType;
export const PlasmicNft__ArgProps = new Array<ArgPropType>();

export type PlasmicNft__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  h1?: p.Flex<"h1">;
  reveal?: p.Flex<typeof Reveal>;
  buy?: p.Flex<typeof BidButton>;
  latestTx?: p.Flex<"div">;
  bidButton?: p.Flex<typeof BidButton>;
  footer?: p.Flex<"div">;
};

export interface DefaultNftProps {
  className?: string;
}

function PlasmicNft__RenderFunc(props: {
  variants: PlasmicNft__VariantsArgs;
  args: PlasmicNft__ArgsType;
  overrides: PlasmicNft__OverridesType;

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
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          {(
            hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
          ) ? (
            <div className={classNames(projectcss.all, sty.freeBox__bNojx)}>
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
                      {"Allegory of Agoraphobia"}
                    </span>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ color: "#FFFFFF" }}
                    >
                      {"Allegory of Agoraphobia"}
                    </span>
                  </React.Fragment>
                )}
              </h1>

              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__aLaQh)}
                displayHeight={"562px" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"auto" as const}
                loading={"lazy" as const}
                src={{
                  src: allegoryOfAgoraphobiajpgRqpfMjqq1,
                  fullWidth: 6030,
                  fullHeight: 3930,
                  aspectRatio: undefined
                }}
              />

              <h4
                className={classNames(
                  projectcss.all,
                  projectcss.h4,
                  projectcss.__wab_text,
                  sty.h4__fMasq
                )}
              >
                <React.Fragment>
                  <React.Fragment>{"by "}</React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ color: "#FFFFFF" }}
                  >
                    {"Jesus Fernandez Escobar"}
                  </span>
                </React.Fragment>
              </h4>

              <h5
                className={classNames(
                  projectcss.all,
                  projectcss.h5,
                  projectcss.__wab_text,
                  sty.h5__fioDj
                )}
              >
                {
                  'Allegory of Agoraphobia\n\n• Mixed media on canvas 190x300cm\n• This piece was made to mention the omnipresent theme of coronavirus, COVID-19. It\nsymbolises the psychosis caused by the virus in social relations, no without reason, and\nhow returning to a « normal life », walking down the streets, created an agoraphobia\nfeeling.\n• The different characters were found on the internet after Googling: "How do people protect\nthemselves from the coronavirus?". Among the images found on the internet are crazy\noutfits, such as the famous dinosaur costume, or people completely covered in plastic.\n• Irony is used here to express how the society\'s behaviour drastically changed during this crisis.\nIt is clear that the mass reacts differently to the individual facing these issues.'
                }
              </h5>

              {true ? (
                <div className={classNames(projectcss.all, sty.freeBox__r1Dx)}>
                  {true ? (
                    <div
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___4MK4P
                      )}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__bwEv6
                        )}
                      >
                        <React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ fontWeight: 700 }}
                          >
                            {"45 000 EUR"}
                          </span>
                        </React.Fragment>
                      </div>

                      <h4
                        className={classNames(
                          projectcss.all,
                          projectcss.h4,
                          projectcss.__wab_text,
                          sty.h4__t1Pug
                        )}
                      >
                        {"Physical artwork"}
                      </h4>
                    </div>
                  ) : null}
                  {(
                    hasVariant(globalVariants, "screen", "mobileOnly")
                      ? true
                      : true
                  ) ? (
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__ni4M8)}
                      displayHeight={"auto" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"38.79%" as const}
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
                  ) : null}
                </div>
              ) : null}
              {true ? (
                <h5
                  className={classNames(
                    projectcss.all,
                    projectcss.h5,
                    projectcss.__wab_text,
                    sty.h5__pRu1Y
                  )}
                >
                  <React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ color: "#8C1C84", fontWeight: 700 }}
                    >
                      {"1"}
                    </span>
                    <React.Fragment>{""}</React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ color: "#FBF0F0" }}
                    >
                      {" / 1 e"}
                    </span>
                    <React.Fragment>{""}</React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ color: "#FFFFFF" }}
                    >
                      {"dition"}
                    </span>
                  </React.Fragment>
                </h5>
              ) : null}
              {true ? (
                <Reveal
                  data-plasmic-name={"reveal"}
                  data-plasmic-override={overrides.reveal}
                  className={classNames("__wab_instance", sty.reveal)}
                  duration={3000 as const}
                  effect={"fade" as const}
                  triggerOnce={true}
                >
                  <BidButton
                    data-plasmic-name={"buy"}
                    data-plasmic-override={overrides.buy}
                    className={classNames("__wab_instance", sty.buy)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__qPl7
                      )}
                    >
                      {"Buy"}
                    </div>
                  </BidButton>

                  <div
                    className={classNames(projectcss.all, sty.freeBox__aYzyU)}
                  />

                  {true ? (
                    <div
                      className={classNames(projectcss.all, sty.freeBox__iOnM)}
                    >
                      {(
                        hasVariant(globalVariants, "screen", "mobileOnly")
                          ? true
                          : true
                      ) ? (
                        <p.PlasmicImg
                          alt={""}
                          className={classNames(sty.img___0F21Y)}
                          displayHeight={"auto" as const}
                          displayMaxHeight={"none" as const}
                          displayMaxWidth={"38.79%" as const}
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
                      ) : null}
                      {true ? (
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__gd2D9
                          )}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__tg7Qq
                            )}
                          >
                            <React.Fragment>
                              <span
                                className={
                                  "plasmic_default__all plasmic_default__span"
                                }
                                style={{ fontWeight: 700 }}
                              >
                                {"200 EUR"}
                              </span>
                            </React.Fragment>
                          </div>

                          <h4
                            className={classNames(
                              projectcss.all,
                              projectcss.h4,
                              projectcss.__wab_text,
                              sty.h4__rAqsv
                            )}
                          >
                            {"Digital"}
                          </h4>
                        </div>
                      ) : null}
                    </div>
                  ) : null}
                </Reveal>
              ) : null}
            </div>
          ) : null}
          {true ? (
            <div
              data-plasmic-name={"latestTx"}
              data-plasmic-override={overrides.latestTx}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.latestTx
              )}
            >
              {"Enter some text"}
            </div>
          ) : null}

          <h5
            className={classNames(
              projectcss.all,
              projectcss.h5,
              projectcss.__wab_text,
              sty.h5__bkxX
            )}
          >
            <React.Fragment>
              <span
                className={"plasmic_default__all plasmic_default__span"}
                style={{ color: "#8C1C84", fontWeight: 700 }}
              >
                {"1"}
              </span>
              <React.Fragment>{""}</React.Fragment>
              <span
                className={"plasmic_default__all plasmic_default__span"}
                style={{ color: "#FBF0F0" }}
              >
                {" / 150 e"}
              </span>
              <React.Fragment>{""}</React.Fragment>
              <span
                className={"plasmic_default__all plasmic_default__span"}
                style={{ color: "#FFFFFF" }}
              >
                {"dition"}
              </span>
            </React.Fragment>
          </h5>

          <BidButton
            data-plasmic-name={"bidButton"}
            data-plasmic-override={overrides.bidButton}
            className={classNames("__wab_instance", sty.bidButton)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__jZ8
              )}
            >
              {"Buy"}
            </div>
          </BidButton>

          <div
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames(projectcss.all, sty.footer)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__qqcu1)}>
              <a
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__qNv37
                )}
              >
                {hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "NFT Deep Wire\nAll rights reserved © 2022"
                  : "NFT Deep Wire | All rights reserved © 2022"}
              </a>
            </div>

            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__hnRki)}>
                <a
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__yvd7H
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
                      sty.link__gTzAk
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
  root: [
    "root",
    "header",
    "h1",
    "reveal",
    "buy",
    "latestTx",
    "bidButton",
    "footer"
  ],
  header: ["header"],
  h1: ["h1"],
  reveal: ["reveal", "buy"],
  buy: ["buy"],
  latestTx: ["latestTx"],
  bidButton: ["bidButton"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  h1: "h1";
  reveal: typeof Reveal;
  buy: typeof BidButton;
  latestTx: "div";
  bidButton: typeof BidButton;
  footer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNft__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNft__VariantsArgs;
    args?: PlasmicNft__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNft__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNft__ArgsType,
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
          internalArgPropNames: PlasmicNft__ArgProps,
          internalVariantPropNames: PlasmicNft__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicNft__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNft";
  } else {
    func.displayName = `PlasmicNft.${nodeName}`;
  }
  return func;
}

export const PlasmicNft = Object.assign(
  // Top-level PlasmicNft renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    h1: makeNodeComponent("h1"),
    reveal: makeNodeComponent("reveal"),
    buy: makeNodeComponent("buy"),
    latestTx: makeNodeComponent("latestTx"),
    bidButton: makeNodeComponent("bidButton"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicNft
    internalVariantProps: PlasmicNft__VariantProps,
    internalArgProps: PlasmicNft__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "NFT Deep Wire NFT #1",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicNft;
/* prettier-ignore-end */
