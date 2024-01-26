# Offline Form-based GeoJSON editor

The tool is designed to simplify the editing of GeoJSON features that must comply with a given content description. 

## Usage

The tool allows the user to fill the ad-hoc content of the Feature's *properties* object following a defined form. The form description is provided by an admin by way of a JSON object contained in a *formats.json* file, which contains the description of several types of features. 

The user uploads to the tool the GeoJSON file containing the Features to edit. The interface presents a dialog showing a line for each of the *features* in the uploaded file. If the type of the feature is not yet defined for the specific feature, the type is marked as undefined and the user is presented with a list of defined types to choose from, extracted from the *formats.json* file. Once the type is defined, the user is presented with the list of attribute names: they are those present in the selected *Feature* together with those associated with that type in the *formats.json* file: some of those defined in the file are unnecessary according with the defined form, other are necessary and defined, others are necessary but undefined. The user can remove the unnecessary ones and edit the value of the others.

After editing the features in FeatureCollection the user can save the file as a GeoJSON file containing the FeatureCollection, or as a *uMap* file framed in a uMap template file.

### Building a forms file

A form file contains an array of forms, each of which is an object describing the required attributes of a Feature user-defined type. The user-defined type is indicated in the *formname* attribute.

A form has another *formItems* array attribute containing one object for each of the required attributes of the user-defined type. Each object has an *itemname* string attribute for the name of the attribute in the feature, a *value* string attribute specifying the default value of the attribute in the feature, and the *type*. This latter is a string in the range *string*, *integer*, *double*, *date*, *time*, *pictures*, *stringcombo*.

Here the description of the attributes

## Implementation details

A GeoJSON object is a JSON object containing geospatial data. A GeoJSON object has a *type* attribute (or *member*) which is one of *Feature*, *FeatureCollection*, or one of the geometries *Point*, *MultiPoint*, *LineString*, *MultiLineString*, *Polygon*, *MultiPolygon*, and *GeometryCollection*. The *Off.html* tool manipulates an object containing a *FeatureCollection*.

A *FeatureCollection* is composed of several *Features*. Each *Feature* has a *type* attribute with the **Feature** string value, an optional *id* attribute, a *geometry* attribute containing a GeoJSON geometry object, and a *properties* attribute consisting of a generic object. The *Off.html* tool operates only on the *properties* attribute and leaves the others unaltered.

The content of the *properties* attribute is modeled after the content of the *format*. Such a variable is the part the user is free to configure for its purpose. The variable's value is an array of objects called *sections*. Each of them has a *sectioname* string attribute and another *forms*, an array of objects each representing a model of the *properties* of a user-defined type of feature, and a *form* in our terminology.

The structure of the *form* is a one-level tree of *objects* mirroring the content of the *properties* attribute. The difference is that the attributes of the *form* object are objects describing the form entry for the data in the same position in the *properties* tree.  

A *form* object contains two attributes: one is the string *formname*, which contains an identifier for the form. The other is 
The tool is useful for creating GeoJSON files with a *property* attribute conforming to a given specification.
The specification describes the attributes in the *property* 
