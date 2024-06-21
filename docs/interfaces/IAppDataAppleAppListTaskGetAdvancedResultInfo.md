**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IAppDataAppleAppListTaskGetAdvancedResultInfo

# Interface: IAppDataAppleAppListTaskGetAdvancedResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
in this case, the value will be null

#### Source

main.ts:194872

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:194877

***

### items?

> **`optional`** **items**: [`BaseAppDataSerpElementItem`](../classes/BaseAppDataSerpElementItem.md)[]

found apps
you can get more results by using the depth parameter when setting a task

#### Source

main.ts:194885

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of app items in the results array
you can get more results by using the depth parameter when setting a task

#### Source

main.ts:194882

***

### keyword?

> **`optional`** **keyword**: `string`

app collection received in a POST array

#### Source

main.ts:194863

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Source

main.ts:194869

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Source

main.ts:194867

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Source

main.ts:194865

***

### se\_results\_count?

> **`optional`** **se\_results\_count**: `number`

the total number of results

#### Source

main.ts:194879
