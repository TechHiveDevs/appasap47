
import { 
  Edit,
  SimpleForm,
  
NumberInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// -------------------------------------------------------------

export default function EditTrade(props: any) {
return (
    <Edit>
      <SimpleForm redirect="list">
        <NumberInput source="price" variant="outlined"  />
<ReferenceInput label="user" source="userid" reference="user">
        <AutocompleteInput variant="outlined" /* optionText="user"   */ />
      </ReferenceInput>
    

      </SimpleForm>
    </Edit>
  );
}