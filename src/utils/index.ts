
import QRCode from 'qrcode';

import dayjs from 'dayjs';

//处理地址字符串s
export function obscureString(input: string): string {
    if (input.length <= 15) {
        return input; // 如果字符串长度小于等于15个字符，则不做处理，直接返回
    }
    
    const start = input.slice(0, 8); // 获取前8个字符
    const end = input.slice(-7);     // 获取后7个字符
    const obscured = start + '******' + end; // 拼接前8个字符 + 6个* + 后7个字符
    
    return obscured;
}
//判断两个字符串是否相等
 export function stringArraysEqual(arr1: string[], arr2: string[]): boolean {
    if (arr1.length !== arr2.length) return false;
    return arr1.every((value, index) => value === arr2[index]);
}



export const generateQRCode = async (text: string): Promise<string> => {
  try {
    return await QRCode.toDataURL(text, { width: 300, margin: 2 });
  } catch (err) {
    console.error(err);
    throw err;
  }
};



 export function formatTimestampToMMDDHHMM(timestamp: number): string {
    return dayjs(timestamp).format('MM/DD HH:mm');
}








