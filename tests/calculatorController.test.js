// นำเข้าฟังก์ชันจาก calculatorService เพื่อทำการทดสอบ
const {
  add,
  subtract,
  multiply,
  divide,
} = require("../services/calculatorService");

// เริ่มต้นกลุ่มการทดสอบสำหรับฟังก์ชันใน Calculator Service
describe("Calculator Service Functions", () => {
  // ทดสอบฟังก์ชันบวก
  test("should add two numbers", () => {
    // คาดหวังว่าผลลัพธ์ของการบวก 3 และ 5 จะเท่ากับ 8
    expect(add(3, 5)).toBe(8);
  });

  // ทดสอบฟังก์ชันลบ
  test("should subtract two numbers", () => {
    // คาดหวังว่าผลลัพธ์ของการลบ 10 และ 4 จะเท่ากับ 6
    expect(subtract(10, 4)).toBe(6);
  });

  // ทดสอบฟังก์ชันคูณ
  test("should multiply two numbers", () => {
    // คาดหวังว่าผลลัพธ์ของการคูณ 7 และ 6 จะเท่ากับ 42
    expect(multiply(7, 6)).toBe(42);
  });

  // ทดสอบฟังก์ชันหาร
  test("should divide two numbers", () => {
    // คาดหวังว่าผลลัพธ์ของการหาร 20 และ 4 จะเท่ากับ 5
    expect(divide(20, 4)).toBe(5);
  });

  // ทดสอบการหารด้วยศูนย์
  test("should throw an error when dividing by zero", () => {
    // คาดหวังว่าจะมีข้อผิดพลาดเกิดขึ้นเมื่อพยายามหารด้วย 0
    // ข้อความข้อผิดพลาดต้องเป็น "Cannot divide by zero"
    expect(() => divide(20, 0)).toThrow("Cannot divide by zero");
  });
});
