[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / TestSummary

# Class: TestSummary

## Implements

- [`ITestSummary`](../interfaces/ITestSummary.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new TestSummary()

> **new TestSummary**(`data`?): [`TestSummary`](TestSummary.md)

#### Parameters

• **data?**: [`ITestSummary`](../interfaces/ITestSummary.md)

#### Returns

[`TestSummary`](TestSummary.md)

#### Defined in

main.ts:163984

## Properties

### error?

> `optional` **error**: `number`

number of serious microdata errors

#### Implementation of

[`ITestSummary`](../interfaces/ITestSummary.md).[`error`](../interfaces/ITestSummary.md#error)

#### Defined in

main.ts:163976

***

### fatal?

> `optional` **fatal**: `number`

number of fatal microdata errors

#### Implementation of

[`ITestSummary`](../interfaces/ITestSummary.md).[`fatal`](../interfaces/ITestSummary.md#fatal)

#### Defined in

main.ts:163974

***

### info?

> `optional` **info**: `number`

number of microdata information flags

#### Implementation of

[`ITestSummary`](../interfaces/ITestSummary.md).[`info`](../interfaces/ITestSummary.md#info)

#### Defined in

main.ts:163980

***

### warning?

> `optional` **warning**: `number`

number of microdata warnings

#### Implementation of

[`ITestSummary`](../interfaces/ITestSummary.md).[`warning`](../interfaces/ITestSummary.md#warning)

#### Defined in

main.ts:163978

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:163993

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:164013

***

### fromJS()

> `static` **fromJS**(`data`): [`TestSummary`](TestSummary.md)

#### Parameters

• **data**: `any`

#### Returns

[`TestSummary`](TestSummary.md)

#### Defined in

main.ts:164006
