 import {sum} from "./sum"

describe("soma",()=>{
   beforeAll(()=>{
      console.log("executando antes")
   })
   test("Teste de soma de 10 + 10 = 20",()=>{
      const resultado = sum(10,10)
      expect(resultado).toBe(20)
   })
  
   it("teste de soma de 2 + 2",()=>{
     const resultado = sum(2,2)
     expect(resultado).toBe(4)
  })
  afterAll(()=>{
   console.log("executando depois")
})
})
