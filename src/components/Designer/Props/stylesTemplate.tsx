import {
  generateButtonGroup,
  generateColorPicker,
  generateDropDownList,
  generateNumberBox,
  generateSlider,
  generateTextBox,
  generateTextDropDown,
} from "./";
import {
  generateMarginPaddingPicker,
  generatePositionPicker,
  generateSizingBox,
} from "./StylesComponents";

const marginAndPaddingDefault = {
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
  padding: { top: 0, right: 0, bottom: 0, left: 0 },
  units: "px",
};

const positionDefault = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  units: "px",
};

const unitsPickerDefault = [
  { value: "px", selected: true },
  { value: "%", selected: false },
  { value: "vw", selected: false },
  { value: "vh", selected: false },
];

const stylesTemplate = [
  generateButtonGroup(
    "flexDirection",
    "Layout",
    "Flex Items",
    "Direction",
    [
      { value: "column", selected: true },
      { value: "row", selected: false },
    ],
    {}
  ),
  generateButtonGroup(
    "flexAlign",
    "Layout",
    "Flex Items",
    "Align",
    [
      { value: "flex-start", selected: true },
      { value: "centre", selected: false },
      { value: "flex-end", selected: false },
      { value: "stretch", selected: false },
      { value: "baseline", selected: false },
    ],
    {}
  ),
  generateButtonGroup(
    "flexJustify",
    "Layout",
    "Flex Items",
    "Justify",
    [
      { value: "flex-start", selected: true },
      { value: "centre", selected: false },
      { value: "flex-end", selected: false },
      { value: "space-between", selected: false },
      { value: "space-around", selected: false },
      { value: "space-evenly", selected: false },
    ],
    {}
  ),
  generateButtonGroup(
    "itemAlign",
    "Layout",
    "Selected Item",
    "Align",
    [
      { value: "auto", selected: true },
      { value: "flex-start", selected: false },
      { value: "flex-end", selected: false },
      { value: "space-between", selected: false },
      { value: "space-around", selected: false },
      { value: "space-evenly", selected: false },
    ],
    {}
  ),
  generateSizingBox(
    "itemSizing",
    "Layout",
    "Selected Item",
    "Sizing",
    { basis: "auto", grow: "auto", shrink: "auto" },
    {}
  ),
  generateButtonGroup(
    "contentWrap",
    "Layout",
    "Content",
    "Wrap",
    [
      { value: "none", selected: true },
      { value: "wrap", selected: false },
      { value: "reverse", selected: false },
    ],
    {}
  ),
  generateButtonGroup(
    "contentAlign",
    "Layout",
    "Content",
    "Align",
    [
      { value: "flex-start", selected: false },
      { value: "center", selected: false },
      { value: "flex-end", selected: false },
      { value: "space-between", selected: false },
      { value: "space-around", selected: false },
      { value: "stretch", selected: false },
    ],
    {}
  ),
  generateMarginPaddingPicker(
    "marginAndPadding",
    "Margin & Padding",
    "",
    "Margin & Padding",
    marginAndPaddingDefault,
    {}
  ),
  generateTextDropDown(
    "width",
    "Size",
    "",
    "Width",
    { text: "", selectList: unitsPickerDefault },
    { textField: { type: "number" } }
  ),
  generateTextDropDown(
    "height",
    "Size",
    "",
    "Height",
    { text: "", selectList: unitsPickerDefault },
    { textField: { type: "number" } }
  ),
  generateTextDropDown(
    "minWidth",
    "Size",
    "",
    "Min. Width",
    { text: "", selectList: unitsPickerDefault },
    { textField: { type: "number" } }
  ),
  generateTextDropDown(
    "minHeight",
    "Size",
    "",
    "Min. Height",
    { text: "", selectList: unitsPickerDefault },
    { textField: { type: "number" } }
  ),
  generateTextDropDown(
    "maxWidth",
    "Size",
    "",
    "Max. Width",
    { text: "", selectList: unitsPickerDefault },
    { textField: { type: "number" } }
  ),
  generateTextDropDown(
    "maxHeight",
    "Size",
    "",
    "Max. Height",
    { text: "", selectList: unitsPickerDefault },
    { textField: { type: "number" } }
  ),
  generateButtonGroup(
    "position",
    "Position",
    "",
    "Type",
    [
      { value: "static", selected: false },
      { value: "absolute", selected: false },
      { value: "sticky", selected: false },
      { value: "relative", selected: false },
    ],
    {}
  ),
  generatePositionPicker(
    "positionPosition",
    "Position",
    "",
    "",
    positionDefault,
    {}
  ),
  generateTextBox("zIndex", "Position", "", "Z-Index", "", {
    type: "numeric",
  }),
  generateDropDownList(
    "overflow",
    "Position",
    "",
    "Overflow",
    [
      { value: "none", selected: true },
      { value: "hidden", selected: true },
      { value: "scroll-x", selected: true },
      { value: "scroll-y", selected: true },
    ],
    {}
  ),
  generateDropDownList("fontFamily", "Typography", "", "Font", [
    { value: "Times New Roman", selected: true },
  ]),
  generateDropDownList("fontWeight", "Typography", "", "Weight", [
    { value: "100", selected: true },
    { value: "200", selected: false },
    { value: "300", selected: false },
    { value: "400", selected: false },
    { value: "500", selected: false },
    { value: "600", selected: false },
    { value: "700", selected: false },
    { value: "800", selected: false },
  ]),
  generateTextDropDown(
    "fontSize",
    "Typography",
    "",
    "Size",
    [
      {
        text: "12",
        selectList: [
          { value: "pt", selected: true },
          { value: "px", selected: false },
          { value: "%", selected: false },
          { value: "em", selected: false },
          { value: "rem", selected: false },
        ],
      },
    ],
    { textField: { type: "number" } }
  ),
  generateTextDropDown(
    "fontHeight",
    "Typography",
    "",
    "Height",
    [
      {
        text: "1",
        selectList: [
          { value: "pt", selected: true },
          { value: "px", selected: false },
          { value: "%", selected: false },
          { value: "em", selected: false },
          { value: "rem", selected: false },
        ],
      },
    ],
    { textField: { type: "number" } }
  ),
  generateColorPicker("color", "Typography", "", "Color", "#ffffff"),
  generateButtonGroup("textAlign", "Typography", "", "Align", [
    { value: "left", selected: true },
    { value: "center", selected: false },
    { value: "right", selected: false },
    { value: "justify", selected: false },
  ]),
  generateButtonGroup("fontSyle", "Typography", "", "Style", [
    { value: "regular", selected: true },
    { value: "italic", selected: false },
  ]),
  generateButtonGroup("textDecoration", "Typography", "", "Decoration", [
    { value: "none", selected: true },
    { value: "underline", selected: false },
    { value: "overline", selected: false },
    { value: "strikethrough", selected: false },
  ]),
  generatePositionPicker(
    "borderSize",
    "Border",
    "",
    "Size",
    positionDefault,
    {}
  ),
  generateColorPicker("borderColor", "Border", "", "Color", "#ffffff"),
  generateButtonGroup(
    "borderStyle",
    "Border",
    "",
    "Style",
    [
      { value: "none", selected: true },
      { value: "dotted", selected: false },
      { value: "dash", selected: false },
      { value: "solid", selected: false },
    ],
    {}
  ),
  generateColorPicker("backgroundColor", "Background", "", "Color", "#ffffff"),
  generateTextBox("customStyle", "Custom", "", "", "", { type: "multiline" }),
];

export default stylesTemplate;
