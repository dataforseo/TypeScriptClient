[**Documentation**](../README.md)

***

[Documentation](../README.md) / TestSummary

# Class: TestSummary

Defined in: main.ts:171638

## Implements

- [`ITestSummary`](../interfaces/ITestSummary.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new TestSummary()

> **new TestSummary**(`data`?): [`TestSummary`](TestSummary.md)

Defined in: main.ts:171650

#### Parameters

##### data?

[`ITestSummary`](../interfaces/ITestSummary.md)

#### Returns

[`TestSummary`](TestSummary.md)

## Properties

### error?

> `optional` **error**: `number`

Defined in: main.ts:171642

number of serious microdata errors

#### Implementation of

[`ITestSummary`](../interfaces/ITestSummary.md).[`error`](../interfaces/ITestSummary.md#error)

***

### fatal?

> `optional` **fatal**: `number`

Defined in: main.ts:171640

number of fatal microdata errors

#### Implementation of

[`ITestSummary`](../interfaces/ITestSummary.md).[`fatal`](../interfaces/ITestSummary.md#fatal)

***

### info?

> `optional` **info**: `number`

Defined in: main.ts:171646

number of microdata information flags

#### Implementation of

[`ITestSummary`](../interfaces/ITestSummary.md).[`info`](../interfaces/ITestSummary.md#info)

***

### warning?

> `optional` **warning**: `number`

Defined in: main.ts:171644

number of microdata warnings

#### Implementation of

[`ITestSummary`](../interfaces/ITestSummary.md).[`warning`](../interfaces/ITestSummary.md#warning)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:171659

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:171679

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`TestSummary`](TestSummary.md)

Defined in: main.ts:171672

#### Parameters

##### data

`any`

#### Returns

[`TestSummary`](TestSummary.md)
