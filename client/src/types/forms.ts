import { EditListingFormData } from "@/components/forms/EditListingForm";
import { DashboardStoreState } from "@/stores/dashboard";

// Edit listing form
type EditableTextField = {
  type: "textarea" | "number";
  displayName: string;
};
type EditableSelectField = {
  type: "select";
  displayName: string;
  dashboardStoreOptionsKey: keyof DashboardStoreState["editListingOptions"];
  dependencyField?: keyof EditListingFormData;
  parentField?: keyof EditListingFormData;
};
type EditableField = EditableTextField | EditableSelectField;

export { type EditableSelectField, type EditableField };
