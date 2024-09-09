
import QRCode from 'qrcode';

import dayjs from 'dayjs';
import { format, formatDistanceToNow, parseISO } from 'date-fns';
import { zhCN } from 'date-fns/locale';



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


//传入时间戳显示xx前
export  function timeAgo(timestamp: string): string {
  const date = parseISO(timestamp);
  return formatDistanceToNow(date, { addSuffix: true, locale: zhCN });
}

export function formatTimestamp(timestamp: string): string {
  const date = parseISO(timestamp);
  return format(date, 'yyyy-MM-dd HH:mm');
}


 export function shuffleArray(arr: string[]): string[] {
  const result = [...arr]; // 复制数组，避免修改原数组
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // 生成0到i之间的随机数
    // 交换元素
    [result[i], result[j]] = [result[j], result[i]];
  }
  console.log(result);
  
  return result;
}



export function getDaysFromToday(timestamp: number): number {
  // 获取当前时间的日期部分（不含时分秒）
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0); // 清除时分秒

  // 将传入的时间戳转换为 Date 对象
  const inputDate = new Date(timestamp);
  inputDate.setHours(0, 0, 0, 0); // 清除时分秒

  // 计算两个日期之间的差异（单位：毫秒）
  const diffInMs = currentDate.getTime() - inputDate.getTime();

  // 将差异转换为天数
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  return diffInDays;
}





