**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / MicrodataFieldsInfo

# Class: MicrodataFieldsInfo

## Implements

- [`IMicrodataFieldsInfo`](../interfaces/IMicrodataFieldsInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MicrodataFieldsInfo(data)

> **new MicrodataFieldsInfo**(`data`?): [`MicrodataFieldsInfo`](MicrodataFieldsInfo.md)

#### Parameters

• **data?**: [`IMicrodataFieldsInfo`](../interfaces/IMicrodataFieldsInfo.md)

#### Returns

[`MicrodataFieldsInfo`](MicrodataFieldsInfo.md)

#### Source

main.ts:159360

## Properties

### fields?

> **`optional`** **fields**: [`MicrodataFieldsInfo`](MicrodataFieldsInfo.md)[]

microdata fields
an array of objects containing data fields related to the certain microdata type

#### Implementation of

[`IMicrodataFieldsInfo`](../interfaces/IMicrodataFieldsInfo.md).[`fields`](../interfaces/IMicrodataFieldsInfo.md#fields)

#### Source

main.ts:159356

***

### name?

> **`optional`** **name**: `string`

field name
name of the data field

#### Implementation of

[`IMicrodataFieldsInfo`](../interfaces/IMicrodataFieldsInfo.md).[`name`](../interfaces/IMicrodataFieldsInfo.md#name)

#### Source

main.ts:159344

***

### test\_results?

> **`optional`** **test\_results**: `any`

microdata validation test results
sub-type microdata test results that contain detected errors and related messages

#### Implementation of

[`IMicrodataFieldsInfo`](../interfaces/IMicrodataFieldsInfo.md).[`test_results`](../interfaces/IMicrodataFieldsInfo.md#test_results)

#### Source

main.ts:159353

***

### types?

> **`optional`** **types**: `any`

parent microdata types
for a full list of available types, please visit schema.org

#### Implementation of

[`IMicrodataFieldsInfo`](../interfaces/IMicrodataFieldsInfo.md).[`types`](../interfaces/IMicrodataFieldsInfo.md#types)

#### Source

main.ts:159347

***

### value?

> **`optional`** **value**: `string`

microdata value
microdata value specified on a target web page

#### Implementation of

[`IMicrodataFieldsInfo`](../interfaces/IMicrodataFieldsInfo.md).[`value`](../interfaces/IMicrodataFieldsInfo.md#value)

#### Source

main.ts:159350

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:159369

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:159394

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MicrodataFieldsInfo`](MicrodataFieldsInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MicrodataFieldsInfo`](MicrodataFieldsInfo.md)

#### Source

main.ts:159387
