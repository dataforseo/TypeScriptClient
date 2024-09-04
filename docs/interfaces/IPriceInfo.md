[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IPriceInfo

# Interface: IPriceInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### currency?

> `optional` **currency**: `string`

currency of the listed price
ISO code of the currency applied to the price

#### Defined in

main.ts:22783

***

### current?

> `optional` **current**: `number`

current price
indicates the current price of the product or service featured in the result

#### Defined in

main.ts:22774

***

### displayed\_price?

> `optional` **displayed\_price**: `string`

price string in the result
raw price string as provided in the result

#### Defined in

main.ts:22789

***

### is\_price\_range?

> `optional` **is\_price\_range**: `boolean`

price is provided as a range
indicates whether a price is provided in a range

#### Defined in

main.ts:22786

***

### max\_value?

> `optional` **max\_value**: `number`

the maximum price
the maximum price of the product or service as indicated in the result

#### Defined in

main.ts:22780

***

### regular?

> `optional` **regular**: `number`

regular price
indicates the regular price of the product or service with no discounts applied

#### Defined in

main.ts:22777
