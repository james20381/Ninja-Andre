<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

@include('inc.shop._head')

<body id="page-top">

@include('inc.shop._nav')



  @yield('content')



<script src="{{ asset('js/app.js') }}"></script>

</body>
</html>
