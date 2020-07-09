import React from "react";

import CodeSnippet from "../../../common/CodeSnippet";

const Javascript = ({ classes }) => {
  return (
    <section className={classes.pythonMainContainer}>
      <h2>Install</h2>
      <br />
      <div>
        <span>
          Install the SDK using npm <br />
        </span>
        <CodeSnippet>npm install snet-sdk</CodeSnippet>
      </div>
      <br />
      <div>
        <span>
          To generate the gRPC client libraries, you need the SingularityNET Command Line Interface, or CLI, which you
          can install using pip
        </span>
        <CodeSnippet>pip install snet-cli</CodeSnippet>
      </div>
      <br />
      <div>
        <span>
          Once you have the CLI installed, run the following command to generate gRPC stubs for service <br />
        </span>
        <CodeSnippet>snet sdk generate-client-library nodejs centivize-org centivize</CodeSnippet>
        <br />
        <span>
          Run the code <br />
        </span>
        <CodeSnippet>
          import services from '&lt;path_to_grpc_service_file&gt;' <br />
          import messages from '&lt;path_to_grpc_message_file&gt;' <br />
          const client = sdk.createServiceClient("centivize-org", "centivize", <br />
          "&lt;services.ClientStub&gt;") <br />
        </CodeSnippet>
      </div>
    </section>
  );
};

export default Javascript;
