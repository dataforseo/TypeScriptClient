**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / TestSummary

# Class: TestSummary

## Implements

- [`ITestSummary`](../interfaces/ITestSummary.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new TestSummary(data)

> **new TestSummary**(`data`?): [`TestSummary`](TestSummary.md)

#### Parameters

• **data?**: [`ITestSummary`](../interfaces/ITestSummary.md)

#### Returns

[`TestSummary`](TestSummary.md)

#### Source

main.ts:159285

## Properties

### error?

> **`optional`** **error**: `number`

number of serious microdata errors

#### Implementation of

[`ITestSummary`](../interfaces/ITestSummary.md).[`error`](../interfaces/ITestSummary.md#error)

#### Source

main.ts:159277

***

### fatal?

> **`optional`** **fatal**: `number`

number of fatal microdata errors

#### Implementation of

[`ITestSummary`](../interfaces/ITestSummary.md).[`fatal`](../interfaces/ITestSummary.md#fatal)

#### Source

main.ts:159275

***

### info?

> **`optional`** **info**: `number`

number of microdata information flags

#### Implementation of

[`ITestSummary`](../interfaces/ITestSummary.md).[`info`](../interfaces/ITestSummary.md#info)

#### Source

main.ts:159281

***

### warning?

> **`optional`** **warning**: `number`

number of microdata warnings

#### Implementation of

[`ITestSummary`](../interfaces/ITestSummary.md).[`warning`](../interfaces/ITestSummary.md#warning)

#### Source

main.ts:159279

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:159294

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:159314

***

### fromJS()

> **`static`** **fromJS**(`data`): [`TestSummary`](TestSummary.md)

#### Parameters

• **data**: `any`

#### Returns

[`TestSummary`](TestSummary.md)

#### Source

main.ts:159307
