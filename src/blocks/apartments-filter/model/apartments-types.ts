import { ArrayToTuple } from 'types/utils';
import { generateApartmentsList, projectList, roomTypeList, statusList } from '../helpers/generate-apartments-list';

export type ProjectName = ArrayToTuple<typeof projectList>;
export type ApartmentStatus = ArrayToTuple<typeof statusList>;
export type BedroomType = ArrayToTuple<typeof roomTypeList>;

export type ApartmentsList = ReturnType<typeof generateApartmentsList>;
export type ApartmentsLine = ApartmentsList[number];
export type ApartmentProps = ApartmentsLine[number];
