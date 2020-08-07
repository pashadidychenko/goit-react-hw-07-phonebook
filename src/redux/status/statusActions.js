import { createAction } from "@reduxjs/toolkit";

const statusInOn = createAction("CHENGE_STATUS_ISON");
const statusExist = createAction("CHENGE_STATUS_EXIST");

export { statusInOn, statusExist };
