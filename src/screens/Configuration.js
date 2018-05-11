import React, { Component } from "react";
import Form from "grommet/components/Form";
import FormField from "grommet/components/FormField";
import TextInput from "grommet/components/TextInput";
import Footer from "grommet/components/Footer";
import Button from "grommet/components/Button";

class ConfigurationScreen extends Component {
  render() {
    return (
      <Form pad="none">
        <FormField label="Example">
          <TextInput type="email" />
        </FormField>

        <Footer pad={{ vertical: "medium" }}>
          <Button label="Submit" type="submit" primary={true} onClick={() => alert("save")} />
        </Footer>
      </Form>
    );
  }
}

export default ConfigurationScreen;
