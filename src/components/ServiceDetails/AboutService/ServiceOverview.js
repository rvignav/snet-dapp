import React from "react";
import { withStyles } from "@material-ui/styles";

import { useStyles } from "./styles";
import Tags from "./Tags";

const ServiceOverview = ({ classes, description, tags }) => {
  return (
    <div className={classes.overViewContainer}>
      <h3>Overview</h3>
      <p>
        Centivize offers two services: an NLP transformer-based summary service, and a paragraph-to-vector similarity
        score calculator. <br />
        <br />
        As part of our summary service, users can upload the path to a file containing long paragraph and, optionally, a
        number from 1-20 specifying the level of summarization to be performed (the default number is 11). Our algorithm
        then outputs the shortened summary of that paragraph. <br />
        <br />
        As part of our similarity score calculator, users can upload two paragraphs, and our algorithm calculates the
        similarity (represented by a float between 0 and 1) between the two paragraphs. <br />
        <br />
        View the instructions below to start using our services, and visit{" "}
        <a href="https://centivize.tech/">https://centivize.tech/</a> and{" "}
        <a href="https://telemedicine.centivize.tech/">https://telemedicine.centivize.tech/</a> to join the Centivize
        platform and engage in smart telemedicine! <br /> <br />
        Built by Vignav Ramesh, Mason Wang, and Satyajit Kumar.
      </p>
      <Tags className={classes.tagsContainer} tags={tags} />
    </div>
  );
};

export default withStyles(useStyles)(ServiceOverview);
