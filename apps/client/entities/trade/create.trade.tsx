
import { 
  Create,
  SimpleForm,
  
NumberInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// ------------------------------------------------

export default function CreateTrade(props: any) {
    return (
      <Create>
        <SimpleForm redirect="list">
          <NumberInput source="price" variant="outlined"  />
<ReferenceInput label="user" source="userid" reference="user">
        <AutocompleteInput variant="outlined" /* optionText="user"   */ />
      </ReferenceInput>
    

        </SimpleForm>
      </Create>
    );
  }
