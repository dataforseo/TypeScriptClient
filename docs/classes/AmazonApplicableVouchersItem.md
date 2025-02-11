[**Documentation**](../README.md)

***

[Documentation](../README.md) / AmazonApplicableVouchersItem

# Class: AmazonApplicableVouchersItem

Defined in: main.ts:194446

## Implements

- [`IAmazonApplicableVouchersItem`](../interfaces/IAmazonApplicableVouchersItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AmazonApplicableVouchersItem()

> **new AmazonApplicableVouchersItem**(`data`?): [`AmazonApplicableVouchersItem`](AmazonApplicableVouchersItem.md)

Defined in: main.ts:194463

#### Parameters

##### data?

[`IAmazonApplicableVouchersItem`](../interfaces/IAmazonApplicableVouchersItem.md)

#### Returns

[`AmazonApplicableVouchersItem`](AmazonApplicableVouchersItem.md)

## Properties

### fixed\_discount?

> `optional` **fixed\_discount**: `number`

Defined in: main.ts:194452

value of the fixed discount

#### Implementation of

[`IAmazonApplicableVouchersItem`](../interfaces/IAmazonApplicableVouchersItem.md).[`fixed_discount`](../interfaces/IAmazonApplicableVouchersItem.md#fixed_discount)

***

### fixed\_discount\_currency?

> `optional` **fixed\_discount\_currency**: `string`

Defined in: main.ts:194454

currency code of the fixed discount

#### Implementation of

[`IAmazonApplicableVouchersItem`](../interfaces/IAmazonApplicableVouchersItem.md).[`fixed_discount_currency`](../interfaces/IAmazonApplicableVouchersItem.md#fixed_discount_currency)

***

### important\_details?

> `optional` **important\_details**: `string`

Defined in: main.ts:194459

important details about the terms of discount vouchers

#### Implementation of

[`IAmazonApplicableVouchersItem`](../interfaces/IAmazonApplicableVouchersItem.md).[`important_details`](../interfaces/IAmazonApplicableVouchersItem.md#important_details)

***

### percentage\_discount?

> `optional` **percentage\_discount**: `number`

Defined in: main.ts:194457

value of the percentage discount
if the discount is fixed, the value will be null

#### Implementation of

[`IAmazonApplicableVouchersItem`](../interfaces/IAmazonApplicableVouchersItem.md).[`percentage_discount`](../interfaces/IAmazonApplicableVouchersItem.md#percentage_discount)

***

### text?

> `optional` **text**: `string`

Defined in: main.ts:194450

text of the voucher

#### Implementation of

[`IAmazonApplicableVouchersItem`](../interfaces/IAmazonApplicableVouchersItem.md).[`text`](../interfaces/IAmazonApplicableVouchersItem.md#text)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:194448

type of element

#### Implementation of

[`IAmazonApplicableVouchersItem`](../interfaces/IAmazonApplicableVouchersItem.md).[`type`](../interfaces/IAmazonApplicableVouchersItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:194472

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:194494

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AmazonApplicableVouchersItem`](AmazonApplicableVouchersItem.md)

Defined in: main.ts:194487

#### Parameters

##### data

`any`

#### Returns

[`AmazonApplicableVouchersItem`](AmazonApplicableVouchersItem.md)
