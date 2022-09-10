import * as React from "react";
import {
  PlasmicBidButton,
  DefaultBidButtonProps
} from "./plasmic/nft_deep_wire/PlasmicBidButton";
import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

interface BidButtonProps extends DefaultBidButtonProps {}

function BidButton_(props: BidButtonProps, ref: ButtonRef) {
  const { plasmicProps } = PlasmicBidButton.useBehavior<BidButtonProps>(
    props,
    ref
  );
  return <PlasmicBidButton {...plasmicProps} />;
}

type ButtonComponentType = {
  (
    props: Omit<BidButtonProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<BidButtonProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};

const BidButton = React.forwardRef(BidButton_) as any as ButtonComponentType;

export default Object.assign(BidButton, {
  __plumeType: "button"
});
