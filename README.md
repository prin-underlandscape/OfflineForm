# Offline Form-based GeoJSON compiler

The tool is designed to simplify the editing of GeoJSON features that must comply with a given content description. 

## Usage

The tool allows to define, for each feature, the user-defined type of the content (not the GeoJSON feature *type*), and edit the *properties* object of the feature according with a user-defined content definition. The above description are provided by the user in a *format* JSON object.

Once defined the *format* object, the user uploads to the tool the GeoJSON file to edit. The interface presents a dialog showing a line for each of the *features* in the uploaded file. If the type of the feature is not defined is not defined in the file, the user is presented with a list of defined types to choose from. Once the type is defined, the user is presented with a list of attribute names: some are defined in the file, but unnecessary according with the defined form, other are necessary and defined, others are necessary but undefined. The user can remove the unnecessary ones, edit the value of the needed ones.

After editing the features in FeatureCollection the user can save the file as a GeoJSON file containing the FeatureCollection, or as a *uMap* file framed in a uMap template file.

### Building a forms file

A form file contain an array of forms, each of which is an object describing the required attributes of a Feature user-defined type. The user-defined type is indicated in the *formname* attribute.

A form has another *formItems* array attribute containing one object for each of the required attributes of the user-defined type. Each object has an *itemname* string attribute for the name of the attribute in the feature, a *value* string attribute specifying the default value of the attribute in the feature, and the *type*. This latter is a string in the range *string*, *integer*, *double*, *date*, *time*, *pictures*, *stringcombo*.

## Implementation details

A GeoJSON object is a JSON object containing geo-spatial data. A GeoJSON object has a *type* attribute (or *member*) which is one of *Feature*, *FeatureCollection*, or one of the geometries *Point*, *MultiPoint*, *LineString*, *MultiLineString*, *Polygon*, *MultiPolygon*, and *GeometryCollection*. The *Off.html* tool manipulates an object containing a *FeatureCollection*.

A *FeatureCollection* is composed by a number of *Features*. Each *Feature* has a *type* attribute with the **Feature** string value, an optional *id* attribute, a *geometry* attribute containing a GeoJSON geometry object and a *properties* attribute consisting of a generic object. The *Off.html* tool operates only the last attribute, and leaves the others unaltered.

The content of the *properties* attribute is modeled after the content of the *format* object variable. Such a variable is the part the user is free to configure for its purpose. The value of the variable is an array of objects called *sections*. Each of them has a *sectionanme* string attribute and another *forms*, which is an array of objects each representing a model of the *properties* of a user-defined type of feature, and a *form* in our terminology.

The structure of the *form* is a tree of *objects* mirroring the content of the *properties* attribute. The difference is that the leaves of the *form* object are objects describing the form entry for the data in the same position in the *properties* tree.  

A *form* object contains two attributes: one is the string *formname*, which contains an identifier for the form. The other is 
The tool is useful to create GeoJSON files with a *property* attribute conforming a given specification.
The specification describes the attributes in the *property* 
