[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / TrendsGraphDataInfo

# Class: TrendsGraphDataInfo

## Implements

- [`ITrendsGraphDataInfo`](../interfaces/ITrendsGraphDataInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new TrendsGraphDataInfo()

> **new TrendsGraphDataInfo**(`data`?): [`TrendsGraphDataInfo`](TrendsGraphDataInfo.md)

#### Parameters

• **data?**: [`ITrendsGraphDataInfo`](../interfaces/ITrendsGraphDataInfo.md)

#### Returns

[`TrendsGraphDataInfo`](TrendsGraphDataInfo.md)

#### Defined in

main.ts:126536

## Properties

### date\_from?

> `optional` **date\_from**: `string`

start date of the corresponding time range
in the UTC format: “yyyy-mm-dd”

#### Implementation of

[`ITrendsGraphDataInfo`](../interfaces/ITrendsGraphDataInfo.md).[`date_from`](../interfaces/ITrendsGraphDataInfo.md#date_from)

#### Defined in

main.ts:126519

***

### date\_to?

> `optional` **date\_to**: `string`

end date of the corresponding time range
in the UTC format: “yyyy-mm-dd”

#### Implementation of

[`ITrendsGraphDataInfo`](../interfaces/ITrendsGraphDataInfo.md).[`date_to`](../interfaces/ITrendsGraphDataInfo.md#date_to)

#### Defined in

main.ts:126522

***

### missing\_data?

> `optional` **missing\_data**: `boolean`

indicates whether the data is unavailable
if true the data on the graph in the Google Trends interface is missing and thus labelled with a dotted line

#### Implementation of

[`ITrendsGraphDataInfo`](../interfaces/ITrendsGraphDataInfo.md).[`missing_data`](../interfaces/ITrendsGraphDataInfo.md#missing_data)

#### Defined in

main.ts:126527

***

### timestamp?

> `optional` **timestamp**: `number`

a point in time in the Unix time format

#### Implementation of

[`ITrendsGraphDataInfo`](../interfaces/ITrendsGraphDataInfo.md).[`timestamp`](../interfaces/ITrendsGraphDataInfo.md#timestamp)

#### Defined in

main.ts:126524

***

### values?

> `optional` **values**: `number`[]

relative keyword popularity rate at a specific timestamp
represents the keyword popularity rate over the given time range
if you specify more than one keyword, the values will be averaged to the highest value across all specified keywords
a value of 100 is the peak popularity for the term. A value of 50 means that the term is half as popular. A score of 0 means there was not enough data for this term

#### Implementation of

[`ITrendsGraphDataInfo`](../interfaces/ITrendsGraphDataInfo.md).[`values`](../interfaces/ITrendsGraphDataInfo.md#values)

#### Defined in

main.ts:126532

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:126545

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:126570

***

### fromJS()

> `static` **fromJS**(`data`): [`TrendsGraphDataInfo`](TrendsGraphDataInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`TrendsGraphDataInfo`](TrendsGraphDataInfo.md)

#### Defined in

main.ts:126563
