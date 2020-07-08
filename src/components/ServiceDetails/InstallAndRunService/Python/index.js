import React from "react";
import { withStyles } from "@material-ui/styles";

import { useStyles } from "./styles";
import CodeSnippet from "../../../common/CodeSnippet";

const Python = ({ classes }) => {
  return (
    <section className={classes.pythonMainContainer}>
      <h2>Install</h2>
      <div>
        <span>Install the SDK using PIP</span>
        <CodeSnippet>pip install snet.sdk</CodeSnippet>
      </div>
      <div>
        <span>
          To generate the gRPC client libraries, you need the SingularityNET
          Command Line Interface, or CLI, which you can install using pip
        </span>
        <CodeSnippet>pip install snet-cli</CodeSnippet>
      </div>
      <div>
        <span>
          Once you have the CLI installed, run the following command to generate
          gRPC stubs for service{" "}
        </span>
        <CodeSnippet>
          snet sdk generate-client-library python &lt;centivize-org&gt;
          &lt;centivize&gtgt;
        </CodeSnippet>
      </div>
      <div>
        <span>Run the code</span>
        <CodeSnippet>
          from snet.sdk import SnetSDK <br />
          import example_service_pb2 <br />
          import example_service_pb2_grpc <br />
          from config import config <br /> <br />
          sdk = SnetSDK(config) <br />
          service_client = sdk.create_service_client( <br />
          centivize-org, centivize, example_service_pb2_grpc.CalculatorStub){" "}
          <br />
          request = example_service_pb2.Paragraphs(par1="Paragraph 1",
          par2="Paragraph 2") <br />
        </CodeSnippet>
      </div>
    </section>
  );
};

export default withStyles(useStyles)(Python);
