import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { themeJson } from "./theme";
import "../index.css";
import { json } from "./survey";

function SurveyComponent( {onComplete} ) {
    const survey = new Model(json);
    survey.applyTheme(themeJson);

    survey.onComplete.add((sender, options) => {
        // console.log(JSON.stringify(sender.data, null, 3));
        onComplete(sender.data);
    });

    return (<Survey model={survey} />);
}

export default SurveyComponent;