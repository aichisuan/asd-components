import Decimal from "decimal.js";


// 数字格式化 千分位分隔符 小数点分隔符 前缀 后缀
export const formatNumber = (
  value: number | string,
  // 保留小数位
  fixed: number = 2,
  // 小数点分隔符
  decimalSeparator: string = ".",
  // 千分位分隔符
  thousandsSeparator: string = ",",
  // prefix
  prefix?: string,
  // suffix
  suffix?: string,
) => {
  if (typeof value !== "number" && typeof value !== "string") {
    console.warn("value must be a number or string");
    return '';
  }

  if (typeof fixed !== "number") {
    console.warn("fixed must be a number");
    return '';
  }

  if (typeof decimalSeparator !== "string") {
    console.warn("decimalSeparator must be a string");
    return '';
  }
  if (typeof thousandsSeparator !== "string") {
    console.warn("thousandsSeparator must be a string");
    return '';
  }

  // 使用 Decimal.js 处理小数位
  const number = new Decimal(value).toFixed(fixed, Decimal.ROUND_DOWN);

  // 如果结果为 0，直接返回
  if (+number === 0) {
    return `${prefix || ''}0${suffix || ''}`;
  }

  // 分离整数部分和小数部分
  const [integerPart, decimalPart] = number.split(".");

  // 处理千分位分隔符
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator);

  // 拼接结果
  const result = decimalPart
    ? `${formattedInteger}${decimalSeparator}${decimalPart}`
    : formattedInteger;

  // 添加前缀和后缀
  return `${prefix || ''}${result}${suffix || ''}`;
};
