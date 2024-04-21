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
};
type EditableField = EditableTextField | EditableSelectField;

export { type EditableSelectField, type EditableField };
