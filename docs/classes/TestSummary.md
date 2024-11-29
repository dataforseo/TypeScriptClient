[**Documentation**](../README.md)

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

##### data?

[`ITestSummary`](../interfaces/ITestSummary.md)

#### Returns

[`TestSummary`](TestSummary.md)

#### Defined in

main.ts:171582

## Properties

### error?

> `optional` **error**: `number`

number of serious microdata errors

#### Implementation of

[`ITestSummary`](../interfaces/ITestSummary.md).[`error`](../interfaces/ITestSummary.md#error)

#### Defined in

main.ts:171574

***

### fatal?

> `optional` **fatal**: `number`

number of fatal microdata errors

#### Implementation of

[`ITestSummary`](../interfaces/ITestSummary.md).[`fatal`](../interfaces/ITestSummary.md#fatal)

#### Defined in

main.ts:171572

***

### info?

> `optional` **info**: `number`

number of microdata information flags

#### Implementation of

[`ITestSummary`](../interfaces/ITestSummary.md).[`info`](../interfaces/ITestSummary.md#info)

#### Defined in

main.ts:171578

***

### warning?

> `optional` **warning**: `number`

number of microdata warnings

#### Implementation of

[`ITestSummary`](../interfaces/ITestSummary.md).[`warning`](../interfaces/ITestSummary.md#warning)

#### Defined in

main.ts:171576

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:171591

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:171611

***

### fromJS()

> `static` **fromJS**(`data`): [`TestSummary`](TestSummary.md)

#### Parameters

##### data

`any`

#### Returns

[`TestSummary`](TestSummary.md)

#### Defined in

main.ts:171604
