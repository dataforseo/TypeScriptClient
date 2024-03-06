[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataBingLocationsResultInfo

# Class: KeywordsDataBingLocationsResultInfo

## Implements

- [`IKeywordsDataBingLocationsResultInfo`](../interfaces/IKeywordsDataBingLocationsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataBingLocationsResultInfo.md#constructor)

### Properties

- [country\_iso\_code](KeywordsDataBingLocationsResultInfo.md#country_iso_code)
- [location\_code](KeywordsDataBingLocationsResultInfo.md#location_code)
- [location\_code\_parent](KeywordsDataBingLocationsResultInfo.md#location_code_parent)
- [location\_name](KeywordsDataBingLocationsResultInfo.md#location_name)
- [location\_type](KeywordsDataBingLocationsResultInfo.md#location_type)

### Methods

- [init](KeywordsDataBingLocationsResultInfo.md#init)
- [toJSON](KeywordsDataBingLocationsResultInfo.md#tojson)
- [fromJS](KeywordsDataBingLocationsResultInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataBingLocationsResultInfo**(`data?`): [`KeywordsDataBingLocationsResultInfo`](KeywordsDataBingLocationsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataBingLocationsResultInfo`](../interfaces/IKeywordsDataBingLocationsResultInfo.md) |

#### Returns

[`KeywordsDataBingLocationsResultInfo`](KeywordsDataBingLocationsResultInfo.md)

#### Defined in

[main.ts:121943](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121943)

## Properties

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[IKeywordsDataBingLocationsResultInfo](../interfaces/IKeywordsDataBingLocationsResultInfo.md).[country_iso_code](../interfaces/IKeywordsDataBingLocationsResultInfo.md#country_iso_code)

#### Defined in

[main.ts:121937](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121937)

___


### location\_code

• `Optional` **location\_code**: `number`

location code

#### Implementation of

[IKeywordsDataBingLocationsResultInfo](../interfaces/IKeywordsDataBingLocationsResultInfo.md).[location_code](../interfaces/IKeywordsDataBingLocationsResultInfo.md#location_code)

#### Defined in

[main.ts:121925](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121925)

___


### location\_code\_parent

• `Optional` **location\_code\_parent**: `number`

the code of the superordinate location
example:
"location_code": 9041134,
"location_name": "Vienna International Airport,Lower Austria,Austria",
"location_code_parent": 20044where location_code_parent corresponds to:
"location_code": 20044,
"location_name": "Lower Austria,Austria"

#### Implementation of

[IKeywordsDataBingLocationsResultInfo](../interfaces/IKeywordsDataBingLocationsResultInfo.md).[location_code_parent](../interfaces/IKeywordsDataBingLocationsResultInfo.md#location_code_parent)

#### Defined in

[main.ts:121935](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121935)

___


### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Implementation of

[IKeywordsDataBingLocationsResultInfo](../interfaces/IKeywordsDataBingLocationsResultInfo.md).[location_name](../interfaces/IKeywordsDataBingLocationsResultInfo.md#location_name)

#### Defined in

[main.ts:121927](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121927)

___


### location\_type

• `Optional` **location\_type**: `string`

location type

#### Implementation of

[IKeywordsDataBingLocationsResultInfo](../interfaces/IKeywordsDataBingLocationsResultInfo.md).[location_type](../interfaces/IKeywordsDataBingLocationsResultInfo.md#location_type)

#### Defined in

[main.ts:121939](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121939)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

[main.ts:121952](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121952)

___


### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

[main.ts:121973](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121973)

___


### fromJS

▸ **fromJS**(`data`): [`KeywordsDataBingLocationsResultInfo`](KeywordsDataBingLocationsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataBingLocationsResultInfo`](KeywordsDataBingLocationsResultInfo.md)

#### Defined in

[main.ts:121966](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121966)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")