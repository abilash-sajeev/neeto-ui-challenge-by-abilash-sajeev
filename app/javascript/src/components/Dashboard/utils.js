import dayjs from "dayjs";

export const calculateCreatedAgo = date => dayjs(date).format("dddd, hh:mm A");

export const formatDateRelativeToNow = date => dayjs(date).fromNow();

export const formatDate = date => dayjs(date).format("MMM, D, YYYY");
