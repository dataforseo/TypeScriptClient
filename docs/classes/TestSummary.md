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

main.ts:159037

## Properties

### error?

> **`optional`** **error**: `number`

number of serious microdata errors

#### Implementation of

[`ITestSummary`](../interfaces/ITestSummary.md).[`error`](../interfaces/ITestSummary.md#error)

#### Source

main.ts:159029

***

### fatal?

> **`optional`** **fatal**: `number`

number of fatal microdata errors

#### Implementation of

[`ITestSummary`](../interfaces/ITestSummary.md).[`fatal`](../interfaces/ITestSummary.md#fatal)

#### Source

main.ts:159027

***

### info?

> **`optional`** **info**: `number`

number of microdata information flags

#### Implementation of

[`ITestSummary`](../interfaces/ITestSummary.md).[`info`](../interfaces/ITestSummary.md#info)

#### Source

main.ts:159033

***

### warning?

> **`optional`** **warning**: `number`

number of microdata warnings

#### Implementation of

[`ITestSummary`](../interfaces/ITestSummary.md).[`warning`](../interfaces/ITestSummary.md#warning)

#### Source

main.ts:159031

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:159046

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:159066

***

### fromJS()

> **`static`** **fromJS**(`data`): [`TestSummary`](TestSummary.md)

#### Parameters

• **data**: `any`

#### Returns

[`TestSummary`](TestSummary.md)

#### Source

main.ts:159059
