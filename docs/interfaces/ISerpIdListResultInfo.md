[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / ISerpIdListResultInfo

# Interface: ISerpIdListResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### cost?

> `optional` **cost**: `number`

cost of the task, USD

#### Defined in

main.ts:24260

***

### datetime\_done?

> `optional` **datetime\_done**: `string`

date and time when the task was completed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Defined in

main.ts:24255

***

### datetime\_posted?

> `optional` **datetime\_posted**: `string`

date and time when the task was made
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Defined in

main.ts:24250

***

### id?

> `optional` **id**: `string`

id of the task

#### Defined in

main.ts:24242

***

### metadata?

> `optional` **metadata**: `object`

contains parameters you specified in the POST request

#### Index Signature

 \[`key`: `string`\]: `any`

#### Defined in

main.ts:24262

***

### status?

> `optional` **status**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Defined in

main.ts:24258

***

### url?

> `optional` **url**: `string`

URL of the task
URL you used for making an API call

#### Defined in

main.ts:24245
