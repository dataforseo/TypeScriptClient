**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IAppDataGoogleLocationsCountryTaskInfo

# Interface: IAppDataGoogleLocationsCountryTaskInfo

## Extends

- [`IBaseResponseTaskInfo`](IBaseResponseTaskInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Inherited from

[`IBaseResponseTaskInfo`](IBaseResponseTaskInfo.md).[`cost`](IBaseResponseTaskInfo.md#cost)

#### Source

main.ts:23439

***

### data?

> **`optional`** **data**: `Object`

contains the same parameters that you specified in the POST request

#### Index signature

 \[`key`: `string`\]: `any`

#### Inherited from

[`IBaseResponseTaskInfo`](IBaseResponseTaskInfo.md).[`data`](IBaseResponseTaskInfo.md#data)

#### Source

main.ts:23445

***

### id?

> **`optional`** **id**: `string`

task identifier
unique task identifier in our system in the UUID format

#### Inherited from

[`IBaseResponseTaskInfo`](IBaseResponseTaskInfo.md).[`id`](IBaseResponseTaskInfo.md#id)

#### Source

main.ts:23428

***

### path?

> **`optional`** **path**: `string`[]

URL path

#### Inherited from

[`IBaseResponseTaskInfo`](IBaseResponseTaskInfo.md).[`path`](IBaseResponseTaskInfo.md#path)

#### Source

main.ts:23443

***

### result?

> **`optional`** **result**: [`AppDataGoogleLocationsCountryResultInfo`](../classes/AppDataGoogleLocationsCountryResultInfo.md)[]

array of results

#### Source

main.ts:186374

***

### result\_count?

> **`optional`** **result\_count**: `number`

number of elements in the result array

#### Inherited from

[`IBaseResponseTaskInfo`](IBaseResponseTaskInfo.md).[`result_count`](IBaseResponseTaskInfo.md#result_count)

#### Source

main.ts:23441

***

### status\_code?

> **`optional`** **status\_code**: `number`

status code of the task
generated by DataForSEO, can be within the following range: 10000-60000
you can find the full list of the response codes here

#### Inherited from

[`IBaseResponseTaskInfo`](IBaseResponseTaskInfo.md).[`status_code`](IBaseResponseTaskInfo.md#status_code)

#### Source

main.ts:23432

***

### status\_message?

> **`optional`** **status\_message**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Inherited from

[`IBaseResponseTaskInfo`](IBaseResponseTaskInfo.md).[`status_message`](IBaseResponseTaskInfo.md#status_message)

#### Source

main.ts:23435

***

### time?

> **`optional`** **time**: `string`

execution time, seconds

#### Inherited from

[`IBaseResponseTaskInfo`](IBaseResponseTaskInfo.md).[`time`](IBaseResponseTaskInfo.md#time)

#### Source

main.ts:23437