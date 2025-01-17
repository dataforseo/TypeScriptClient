[**Documentation**](../README.md)

***

[Documentation](../README.md) / MicrodataFieldsInfo

# Class: MicrodataFieldsInfo

Defined in: main.ts:171706

## Implements

- [`IMicrodataFieldsInfo`](../interfaces/IMicrodataFieldsInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MicrodataFieldsInfo()

> **new MicrodataFieldsInfo**(`data`?): [`MicrodataFieldsInfo`](MicrodataFieldsInfo.md)

Defined in: main.ts:171725

#### Parameters

##### data?

[`IMicrodataFieldsInfo`](../interfaces/IMicrodataFieldsInfo.md)

#### Returns

[`MicrodataFieldsInfo`](MicrodataFieldsInfo.md)

## Properties

### fields?

> `optional` **fields**: [`MicrodataFieldsInfo`](MicrodataFieldsInfo.md)[]

Defined in: main.ts:171721

microdata fields
an array of objects containing data fields related to the certain microdata type

#### Implementation of

[`IMicrodataFieldsInfo`](../interfaces/IMicrodataFieldsInfo.md).[`fields`](../interfaces/IMicrodataFieldsInfo.md#fields)

***

### name?

> `optional` **name**: `string`

Defined in: main.ts:171709

field name
name of the data field

#### Implementation of

[`IMicrodataFieldsInfo`](../interfaces/IMicrodataFieldsInfo.md).[`name`](../interfaces/IMicrodataFieldsInfo.md#name)

***

### test\_results?

> `optional` **test\_results**: [`Test_results`](Test_results.md)

Defined in: main.ts:171718

microdata validation test results
sub-type microdata test results that contain detected errors and related messages

#### Implementation of

[`IMicrodataFieldsInfo`](../interfaces/IMicrodataFieldsInfo.md).[`test_results`](../interfaces/IMicrodataFieldsInfo.md#test_results)

***

### types?

> `optional` **types**: `string`[]

Defined in: main.ts:171712

parent microdata types
for a full list of available types, please visit schema.org

#### Implementation of

[`IMicrodataFieldsInfo`](../interfaces/IMicrodataFieldsInfo.md).[`types`](../interfaces/IMicrodataFieldsInfo.md#types)

***

### value?

> `optional` **value**: `string`

Defined in: main.ts:171715

microdata value
microdata value specified on a target web page

#### Implementation of

[`IMicrodataFieldsInfo`](../interfaces/IMicrodataFieldsInfo.md).[`value`](../interfaces/IMicrodataFieldsInfo.md#value)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:171734

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:171763

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`MicrodataFieldsInfo`](MicrodataFieldsInfo.md)

Defined in: main.ts:171756

#### Parameters

##### data

`any`

#### Returns

[`MicrodataFieldsInfo`](MicrodataFieldsInfo.md)
