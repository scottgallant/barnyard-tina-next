import React from "react";
import type { Pages } from "../.tina/__generated__/types";
import { Content } from "./blocks/content";
import { Features } from "./blocks/features";
import { Hero } from "./blocks/hero";
import { Hero2 } from "./blocks/hero2";
import { Testimonial } from "./blocks/testimonial";

export const Blocks = (props: Pages) => {
  return (
    <>
      {props.blocks
        ? props.blocks.map(function (block, i) {
          switch (block.__typename) {
            case "PagesBlocksContent":
              return (
                <React.Fragment key={i + block.__typename}>
                  <Content data={block} />
                </React.Fragment>
              );
            case "PagesBlocksHero":
              return (
                <React.Fragment key={i + block.__typename}>
                  <Hero data={block} />
                </React.Fragment>
              );
            case "PagesBlocksHero2":
              return (
                <React.Fragment key={i + block.__typename}>
                  <Hero2 data={block} />
                </React.Fragment>
              );
            case "PagesBlocksFeatures":
              return (
                <React.Fragment key={i + block.__typename}>
                  <Features data={block} />
                </React.Fragment>
              );
            case "PagesBlocksTestimonial":
              return (
                <React.Fragment key={i + block.__typename}>
                  <Testimonial data={block} />
                </React.Fragment>
              );
            default:
              return null;
          }
        })
        : null}
    </>
  );
};
