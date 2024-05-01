import { getRandomNumber } from '@/shared/lib/get-random-number';

export const projectList = ['Stonehenge'] as const;
export const statusList = ['free', 'free', 'booked', 'sold'] as const;
export const roomTypeList = ['St', '1BR', '2BR', '3BR'] as const;

export function generateApartmentsList(lines = 8, cells = 15, project = projectList[0]) {
    const result = Array(lines)
        .fill(0)
        .map(() => {
            return Array(cells)
                .fill(0)
                .map(() => {
                    const status = statusList[getRandomNumber(0, statusList.length)];
                    const roomsFactor = getRandomNumber(0, roomTypeList.length);
                    const rooms = roomTypeList[roomsFactor];
                    const price = getRandomNumber(100000 + 100000 * roomsFactor, 300000 + 100000 * roomsFactor);
                    const area = getRandomNumber(25 + 25 * roomsFactor, 50 + 50 * roomsFactor) + Number(Math.random().toFixed(2));

                    return {
                        status,
                        project,
                        rooms,
                        price,
                        area,
                        isFiltered: false,
                    };
                });
        });

    return result;
}
